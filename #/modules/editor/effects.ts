import { createEffect } from 'solid-js';
import { editorState } from './state';

export const createSession = () => {};

export const initializeEditor = () => {
  var editor = ((window as any).editor = ace.edit('editor'));
  editor.setTheme(editorState.theme);
  editor.session.setMode(editorState.session.mode);
  editor.session.setValue(editorState.session.code);
};

createEffect(() => {
  debugger;
  const editor: AceAjax.Editor = (window as any).editor;
  if (!editor) {
    return;
  }

  editor.setTheme(editorState.theme);
  editor.session.setMode(editorState.session.mode);
  editor.session.setValue(editorState.session.code);
});
