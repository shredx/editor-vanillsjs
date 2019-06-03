class Editor {
  constructor(editorNode, config) {
    this._editor = "rana";
    Editor.mount(editorNode);
    this.methods = {};
    this.methods.onChange= config.onChange; 
  }

  static mount (editorNode) {
    const contentEditableNode = document.createElement('div');
    contentEditableNode.addEventListener('onchange', Editor.onChange, false);
    contentEditableNode.contentEditable = true;
    editorNode.appendChild(contentEditableNode);
  }

  static onChange (value) {
    this.methods.onChange(value);
  }

}

export default Editor;