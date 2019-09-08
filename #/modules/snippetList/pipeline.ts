import { fromEvent } from 'rxjs';
import { allSnippetState, updateAllSnippet } from './state';

export const addSnippet = (element: HTMLButtonElement) => {
  fromEvent(element, 'click').subscribe(() => {
    updateAllSnippet({ list: [...allSnippetState.list] });
  });
};
