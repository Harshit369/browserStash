import { createEffect } from 'solid-js';
import { editorState } from './state';

export const initializeEditor = () => {
  ((window as any).editor = ace.edit('editor')),
    {
      mode: editorState.mode,
      selectionStyle: editorState.theme,
    };
};

createEffect(() => {
  const editor = (window as any).editor;
  if (editor) {
    editor.setTheme(editorState.theme);
    editor.session.setMode(editorState.mode);
  }
});
