import * as acemodule from 'ace-builds/src-noconflict/ace';
import 'ace-builds/webpack-resolver';

console.log('editor', acemodule);

export function initializeEditor(element: HTMLDivElement) {
  setTimeout(() => {
    const editor = ace.edit(element.id);
    editor.setTheme('ace/theme/monokai');
    editor.session.setMode('ace/mode/javascript');
  }, 500);
}
