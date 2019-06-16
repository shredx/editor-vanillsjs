class editorApi {
  constructor(node) {
    this.editorNode = node;
    this.focusNode = null;
    this.focusNodeOffset = 0;
  }

  focusEditor() {
    this.editorNode.focus();
  }

  removeAllRanges() {
    this.saveFocusNode();
    document.getSelection().removeAllRanges();
    this.focusNodeFn();
  }

  saveFocusNode() {
    const node = document.getSelection();
    this.focusNode = node.focusNode;
    this.focusNodeOffset = node.focusOffset;
  }

  getSelection() {
    return document.getSelection();
  }

  focusNodeFn() {
    this.getSelection().setPosition(this.focusNode, this.focusNodeOffset);
    this._resetFocusNode();
  }

  _resetFocusNode() {
    this.focusNode = null;
    this.focusNodeOffset = 0;
  }

  insertCustomTag(componentKey, props = {}) {
    const replacePlaceholder = props.replacePlaceholder || false;
    this.insertHTML(props.tag);
  }

  backColor(color) {
    this._ec("backColor", false, color);
  }

  bold() {
    this._ec("bold", false, null);
  }

  addCustomTag(htmlString) {
    this._ec("insertHTML", false, htmlString);
  }
  // copy: -> @_ec("copy", false)
  // createLink: (uri) -> @_ec("createLink", false, uri)
  // cut: -> @_ec("cut", false)
  // decreaseFontSize: -> @_ec("decreaseFontSize", false)
  // delete: -> @_ec("delete", false)
  // fontName: (fontName) -> @_ec("fontName", false, fontName)
  // fontSize: (fontSize) -> @_ec("fontSize", false, fontSize)
  // foreColor: (color) -> @_ec("foreColor", false, color)
  // formatBlock: (tagName) -> @_ec("formatBlock", false, tagName)
  // forwardDelete: -> @_ec("forwardDelete", false)
  heading: (tagName) -> @_ec("heading", false, tagName)
  // hiliteColor: (color) -> @_ec("hiliteColor", false, color)
  // increaseFontSize: -> @_ec("increaseFontSize", false)
  // indent: -> @_ec("indent", false)
  // insertHorizontalRule: -> @_ec("insertHorizontalRule", false)

  insertHTML(html, { selectInsertion } = {}) {
    this._ec("insertHTML", false, html);
  }

  // insertImage: (uri) -> @_ec("insertImage", false, uri)
  // insertOrderedList: -> @_ec("insertOrderedList", false)
  // insertUnorderedList: -> @_ec("insertUnorderedList", false)
  // insertParagraph: -> @_ec("insertParagraph", false)
  // insertText: (text) -> @_ec("insertText", false, text)
  // italic: -> @_ec("italic", false)
  // justifyCenter: -> @_ec("justifyCenter", false)
  // justifyFull: -> @_ec("justifyFull", false)
  justifyLeft() {
    this._ec("justifyLeft", false);
  }
  justifyRight() {
    this._ec("justifyRight", false);
  }
  justifyCenter() {
    this._ec("justifyCenter", false);
  }

  // outdent: -> @_ec("outdent", false)
  // paste: -> @_ec("paste", false)
  // redo: -> @_ec("redo", false)
  // removeFormat: -> @_ec("removeFormat", false)
  // selectAll: -> @_ec("selectAll", false)
  // strikeThrough: -> @_ec("strikeThrough", false)
  // subscript: -> @_ec("subscript", false)
  // superscript: -> @_ec("superscript", false)
  // underline: -> @_ec("underline", false)
  // undo: -> @_ec("undo", false)
  // unlink: -> @_ec("unlink", false)
  // styleWithCSS: (style) -> @_ec("styleWithCSS", false, style)

  // contentReadOnly: -> @_notImplemented()
  // enableInlineTableEditing: -> @_notImplemented()
  // enableObjectResizing: -> @_notImplemented()
  // insertBrOnReturn: -> @_notImplemented()
  // useCSS: -> @_notImplemented()
  _ec(...args) {
    document.execCommand(...args);
    return this;
  }
  _notImplemented() {
    throw new Error("Not implemented");
  }
}

export default editorApi;
