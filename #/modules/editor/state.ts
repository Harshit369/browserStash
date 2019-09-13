import { Editor } from '#/interfaces';
import { createState } from 'solid-js';
import './effects';

const initialState: Editor = {
  theme: 'ace/theme/monokai',
  session: {
    mode: 'ace/mode/javascript',
    code: '',
  },
};

const [editorState, updateEditor] = createState<Editor>(initialState);

export { editorState, updateEditor };
