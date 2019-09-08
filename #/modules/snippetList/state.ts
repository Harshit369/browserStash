import { Snippet } from '#/interfaces';
import { createState } from 'solid-js';

interface State {
  list: Snippet[];
  searchString: string;
  selected?: Snippet;
  new?: Snippet;
}

const initialState: State = {
  list: [],
  searchString: '',
};

const [allSnippetState, updateAllSnippet] = createState<State>(initialState);

export { allSnippetState, updateAllSnippet };
