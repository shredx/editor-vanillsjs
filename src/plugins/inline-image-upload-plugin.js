import dom from "../utils/dom";
console.log(dom);
class inlineImageUploadPlugin {
  static onDrop(editor, data = {}) {
    //kill any default behavior
    data.event.stopPropagation();
    data.event.preventDefault();
    const files = data.event.dataTransfer.files;

    // name, size, type inside of files
    console.log(files);
    if (files.length === 0) {
      return;
    }

    console.log(files[0].content);
    var reader = new FileReader();
    reader.onload = function(e) {
      editor._editor.addCustomTag(
        dom.buildAnchorTag({
          url: e.target.result,
          text: files[0].name
        })
      );
    };

    reader.readAsDataURL(files[0]);
  }

  static onDragOver() {
    //buildAnchorTag();
    //console.log("drag over");
  }
}

export default inlineImageUploadPlugin;
