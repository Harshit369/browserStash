import { Editor } from '#/interfaces';
import { createState } from 'solid-js';
import './effects';

const initialState: Editor = {
  mode: 'ace/theme/monokai',
  theme: 'ace/mode/javascript',
};

const [editorState, updateEditor] = createState(initialState);

export { editorState, updateEditor };
