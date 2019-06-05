import editorApi from "../utils/editor/editor-api";
import plugins from "../plugins/registry";
import events from "../store/events";



class Editor {

  constructor(editorNode, config) {
    this._editor = new editorApi(editorNode);
    
    this.toolbarOptions = this.toolbarOptions;
    this.toolbarOptions = {
      bold: {
        status: true,
        image: '',
        name: 'B',
        callback: () => {
          console.log ("bold called");
          this._editor.focusEditor();
          console.log(document.getSelection().focusNode);
          this._editor.bold();
        }
      }
    }

    this.mount(editorNode);
    events.subscribe("changed", () => {
      console.log ("content changed")
    })
    this.methods = {};
    this.methods.onChange= config.onChange; 
  }

  mount (editorNode) {
    const parentNode = document.createElement('div');
    const contentEditableNode = document.createElement('div');
    const toolbar = document.createElement('div');
    contentEditableNode.contentEditable = true;
    contentEditableNode.addEventListener('input', this.onInputChange, false);

    const options = [];
    for (let func in this.toolbarOptions) {
      if (this.toolbarOptions[func].status) {
        const opt = this.toolbarOptions[func];
        options.push(`<li data-name="${func}">${opt.name}</li>`)
      }
    }
    toolbar.innerHTML = `<ul style="list-style:none">
      ${options}
    </ul>
    `;

    toolbar.addEventListener("click", (event) => {
      console.log ("clicked ", event.srcElement.dataset.name);
      this.toolbarOptions[event.srcElement.dataset.name].callback();

    },false);

    parentNode.appendChild(contentEditableNode);
    parentNode.appendChild(toolbar);

    editorNode.appendChild(parentNode);

  }
  /**
   * input event is fired when something in an input 
   * or textarea element has changes and it's also fired
   *  when something has changed in elements with
   *  contenteditable attribute. Perfect!} value 
   */
  onInputChange = (event) => {
    //console.log(event.target.innerHTML);
    // run plugins
    this.dispatchEvent("onContentChanged", event);
    // call props method 
    this.methods.onChange(event);
  }

  dispatchEvent = (method, args) => {
    console.log (method, " method fired");
    this.runPlugins(method, args);
  }

  runPlugins  = (method, args) => {
    for (let plugin in Object.getOwnPropertyNames(plugins)) {
      if (plugin[method]) {
        plugin[method](args);
      }
    }
  }

}

export default Editor;