import editorApi from "../utils/editor/editor-api";
import plugins from "../plugins/registry";
import events from "../store/events";
import toolbar from "./toolbar";
import store from "../store/editor-store";
import registry from "../plugins/registry";

class Editor {
  constructor(editorNode, config) {
    this._editor = new editorApi(editorNode);
    this._plugins = this.getPlugins();
    // Config for toolbar
    this._toolbar = new toolbar(editorNode, this._editor);
    this.toolbarOptions = this._toolbar.get();

    // setup mutation observer
    this._observer = new MutationObserver(this._mutationOberserverCb);
    this._observer.observe(editorNode, {
      childList: true,
      attributes: true,
      subtree: true //Omit or set to false to observe only changes to the parent node.
    });

    // All events are here
    this.eventsAndCbs = [
      { name: "blur", handler: "onFocusLost" },
      { name: "selectionchange", handler: "onSelect", global: true },
      { name: "focus", handler: "onFocus" },
      { name: "keyup", handler: "onKeyup" },
      { name: "keydown", handler: "onKeydown" }
    ];

    this.mount(editorNode);

    events.subscribe("changed", () => {
      console.log("content changed");
    });

    this.methods = {};
    this.methods.onChange = config.onChange;
  }

  _mutationOberserverCb = (mutationList, observer) => {
    console.log("callback", mutationList);
    mutationList.forEach(mutation => {
      switch (mutation.type) {
        case "childList":
          /* One or more children have been added to and/or removed
             from the tree; see mutation.addedNodes and
             mutation.removedNodes */
          break;
        case "attributes":
          /* An attribute value changed on the element in
             mutation.target; the attribute name is in
             mutation.attributeName and its previous value is in
             mutation.oldValue */
          break;
      }
    });
  };

  mount(editorNode) {
    const parentNode = document.createElement("div");
    parentNode.classList.add("parent");
    const contentEditableNode = document.createElement("div");
    contentEditableNode.classList.add("vanillajs-editor");

    const toolbar = document.createElement("div");
    toolbar.classList.add("editor-toolbar");
    contentEditableNode.contentEditable = true;

    contentEditableNode.addEventListener("input", this.onInputChange, false);

    this._attachEvents(contentEditableNode);

    const options = [];
    for (let func in this.toolbarOptions) {
      if (this.toolbarOptions[func].status) {
        const opt = this.toolbarOptions[func];
        options.push(`<li data-name="${func}">${opt.name}</li>`);
      }
    }
    toolbar.innerHTML = `<ul style="list-style:none">
      ${options}
    </ul>
    `;

    toolbar.addEventListener(
      "focusout",
      event => {
        console.log("clicked blur", event.srcElement.dataset.name);
      },
      false
    );

    //@TODO remove these events when editor removed from code to stop leakage of memory
    toolbar.addEventListener(
      "click",
      event => {
        //console.log ("clicked ", event.srcElement.dataset.name);
        this.toolbarOptions[event.srcElement.dataset.name].callback();
      },
      false
    );
    parentNode.appendChild(toolbar);

    parentNode.appendChild(contentEditableNode);

    editorNode.appendChild(parentNode);
  }

  getPlugins = () => {
    const data = [];
    for (let plugin in registry) {
      try {
        const pl = require(`../plugins/${plugin}`).default;
        if (pl) {
          data.push(pl);
        }
      } catch (e) {
        // handle error here
      }
    }

    return data;
  };

  _attachEvents = node => {
    this.eventsAndCbs.forEach(event => {
      if (event.global) {
        document.addEventListener(event.name, this[event.handler], false);
      } else {
        node.addEventListener(event.name, this[event.handler], false);
      }
    });
  };

  /**
   * input event is fired when something in an input
   * or textarea element has changes and it's also fired
   *  when something has changed in elements with
   *  contenteditable attribute. Perfect!} value
   */
  onInputChange = event => {
    // run plugins
    this.dispatchEvent("onContentChanged", event);
    // call props method
    this.methods.onChange(event);
  };

  onFocusLost = e => {
    this.dispatchEvent("onFocusLost");
  };

  onFocus = () => {
    this.restoreSelection(this.currentSelection);
  };

  onSelect = () => {
    // implement it
  };
  // move to selection plugin
  saveSelection = () => {
    if (window.getSelection) {
      var sel = window.getSelection();
      if (sel.getRangeAt && sel.rangeCount) {
        return sel.getRangeAt(0);
      }
    } else if (document.selection && document.selection.createRange) {
      return document.selection.createRange();
    }
    return null;
  };

  // move to selection plugin
  restoreSelection = range => {
    if (range) {
      if (window.getSelection) {
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
      } else if (document.selection && range.select) {
        range.select();
      }
    }
  };

  dispatchEvent = (method, args) => {
    this.runPlugins(method, args);
  };

  // It will run fired methods on all plugins if method exist on them
  runPlugins = (method, args) => {
    this._plugins.forEach(plugin => {
      if (plugin[method]) {
        plugin[method](this);
      }
    });
  };
}

export default Editor;
