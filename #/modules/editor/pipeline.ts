import * as acemodule from 'ace-builds/src-noconflict/ace';
import 'ace-builds/webpack-resolver';
import { initializeEditor as setupEditor } from './effects';

console.log('editor', acemodule);

export function initializeEditor() {
  setupEditor();
}
