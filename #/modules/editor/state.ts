import { createState } from 'solid-js';
import './effects';

const initialState: Record<string, any> = {};

const [editorState, setEditorState] = createState(initialState);

export { editorState, setEditorState };
