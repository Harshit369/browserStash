import { Editor } from '#/interfaces';
import { createState } from 'solid-js';
import './effects';

const initialState: Editor = {
  mode: 'ace/theme/monokai',
  theme: 'ace/mode/javascript',
  code: '',
};

const [editorState, updateEditor] = createState<Editor>(initialState);

export { editorState, updateEditor };
