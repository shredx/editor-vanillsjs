class dropEditorPlugin {
  static onDrop(editor, data = {}) {
    //kill any default behavior
    data.event.stopPropagation();
    data.event.preventDefault();
    // const files = data.event.dataTransfer.files;
    // // name, size, type inside of files
    // console.log(files);
  }

  static onDragOver() {
    //console.log("drag over");
  }
}

export default dropEditorPlugin;
