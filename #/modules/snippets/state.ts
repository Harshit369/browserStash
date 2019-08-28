import { Snippet } from '#/interfaces';
import { createState } from 'solid-js';

const initialState: Record<string, Snippet> = {};

const [snippetState, setSnippetsState] = createState(initialState);

export { snippetState, setSnippetsState };
