import Editor from "./editor/editor";
import "./index.scss";

const node = document.getElementById("local-editor");
const editor = new Editor(node, {
  onChange: function(value) {
    //console.log(value);
  }
});

// mount the editor on root node
