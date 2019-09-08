import { Snippet } from '#/interfaces';
import { createState } from 'solid-js';

interface State {
  list: Snippet[];
  searchString: string;
  selected?: Snippet;
}

const initialState: State = {
  list: [],
  searchString: '',
};

const [allSnippetState, updateAllSnippet] = createState(initialState);

export { allSnippetState, updateAllSnippet };
