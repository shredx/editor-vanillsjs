class toolbar {
  constructor(node, editorRef) {
    this._editorNode = node;
    this._editor = editorRef;
  }

  get() {
    return {
      bold: {
        status: true,
        image: "assets/icons/bold.svg",
        className: "toolbar-icons",
        name: "B",
        callback: () => {
          this._editor.bold();
          this._editor.focusEditor();
        }
      },
      centerAlign: {
        status: true,
        image: "assets/icons/center-align.png",
        className: "toolbar-icons",
        name: "CA",
        callback: () => {
          this._editor.justifyCenter();
          this._editor.focusEditor();
        }
      },
      rightAlign: {
        status: true,
        image: "assets/icons/right-align.svg",
        className: "toolbar-icons",
        name: "RA",
        callback: () => {
          this._editor.justifyRight();
          this._editor.focusEditor();
        }
      },
      leftAlign: {
        status: true,
        image: "assets/icons/left-align.svg",
        className: "toolbar-icons",
        name: "LA",
        callback: () => {
          this._editor.justifyLeft();
          this._editor.focusEditor();
        }
      },
      attachment: {
        status: true,
        image: "assets/icons/attachment.svg",
        className: "toolbar-icons",
        name: "AT",
        callback: () => {
          this._editor.justifyLeft();
          this._editor.focusEditor();
        }
      }
    };
  }
}

export default toolbar;
