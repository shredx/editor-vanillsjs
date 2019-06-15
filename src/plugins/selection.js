class selectionEditorPlugin {
  static onFocusLost(editor, data = {}) {
    const currentSelection = editor.saveSelection();
    editor.restoreSelection(currentSelection);
    // then, you loose focus
  }
}

export default selectionEditorPlugin;
