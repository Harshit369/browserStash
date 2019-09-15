import { Snippet } from '#/interfaces';
import * as id from 'nanoid';
import { fromEvent } from 'rxjs';
import { allSnippetState, updateAllSnippet } from './state';

export const createNewSnippet = (): Snippet => {
  const name = id();
  return {
    id: name,
    name,
    createdAt: Date.now(),
    session: {
      code: '',
      mode: 'js',
    },
    tags: [],
  };
};

export const addSnippet = (element: HTMLButtonElement) => {
  fromEvent(element, 'click').subscribe(() => {
    updateAllSnippet({ list: [createNewSnippet(), ...allSnippetState.list] });
  });
};
