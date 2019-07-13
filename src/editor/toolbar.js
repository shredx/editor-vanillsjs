import utils from "../utils/dom";

class toolbar {
  constructor(node, editorRef) {
    this._editorNode = node;
    this._editor = editorRef;
    this.flag = false;
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
          utils.openUploadFile({
            playClick: true,
            eventListners: [{
              name: 'change',
              cb: (event) => {
                Object.keys(event.target.files).forEach((key) => {
                  const file = event.target.files[key];
                  var reader = new FileReader();
                  const that = this;
                  reader.onload = (e) => {
                    //insert images here
                    console.log(that);
                    that._editor.addCustomTag(
                      utils.buildAnchorTag({
                        url: e.target.result,
                        text: file.name
                      })
                    );
                  };
                  reader.readAsDataURL(file);
                })
              }
            }]
          });
          this._editor.focusEditor();
        }
      },

      italic: {
        status: true,
        image: "",
        name: "I",
        callback: () => {
          this._editor.italic();
          this._editor.removeAllRanges();
          this._editor.focusEditor();
        }
      },

      fontColor: {
        status: true,
        image: "",
        name: "FC",
        callback: () => {
          if(!this.flag){
            this._editor.fontColor();
            this._editor.focusEditor();
            this.flag = true;
          }
          else{
            this._editor.fontColorReset();
            this._editor.focusEditor();
            this.flag = false;
          } 
        }
      }
    };
  }
}

export default toolbar;
