class toolbar {
  constructor(node, editorRef) {
    this._editorNode = node;
    this._editor = editorRef;
  }

  get() {
    return {
      bold: {
        status: true,
        image: "",
        name: "B",
        callback: () => {
          this._editor.bold();
          this._editor.removeAllRanges();
          this._editor.focusEditor();
        }
      }
    };
  }
}

export default toolbar;
