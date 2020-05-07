import Editor from "./editor/editor";
import "./index.scss";

const getStyle = () => {
  return `
    .vanillajs-editor {
      line-height: 1.58;
      padding: 12px;
    }
    .vanillajs-editor div {
      margin: 4px 0px;
    }
    .vanillajs-editor:focus {
      outline: 0px solid #ffcece;
    }
    .vanillajs-editor img {
      max-width: 50%;
    }
    .parent {
      border: 0.1px solid #dcdbdb;
      padding: 4px;
    }
    .editor-toolbar ul {
      margin: 0px;
      padding: 0px;
      display: flex;
    }
    .editor-toolbar ul li {
      padding: 4px;
      width: 24px;
      height: 24px;
    }
    .editor-toolbar ul li:hover {
      cursor: pointer;
      border: 1px solid grey;
    }
    .editor-toolbar .toolbar-icons {
      width: 20px;
      height: 20px;
    }
  `
}


class RichTextEditor extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  render () {
    const node = document.createElement('div');
    this.shadowRoot.appendChild(node);
    const editor = new Editor(node, {
      onChange: function(value) {
        //console.log(value);
      }
    });
    this.addStyle();
  }

  addStyle() {
    const styleTag = document.createElement('style');
    styleTag.textContent = getStyle();
    this.shadowRoot.appendChild(styleTag);
  }
}

try {
  customElements.define('rich-text-editor', RichTextEditor)
} catch (err) {
  const h3 = document.createElement('h3')
  h3.innerText = "This site uses webcomponents which don't work in all browsers! Try this site in a browser that supports them!"
  document.body.appendChild(h3)
}