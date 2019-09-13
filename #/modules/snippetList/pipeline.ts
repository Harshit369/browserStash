import { fromEvent } from 'rxjs';
import { updateEditor } from '../editor/state';

export const addSnippet = (element: HTMLButtonElement) => {
  fromEvent(element, 'click').subscribe(() => {
    debugger;
    // updateAllSnippet({ list: [...allSnippetState.list] });
    updateEditor({ session: { code: 'something1' } });
  });
};
