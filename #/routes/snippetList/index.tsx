import Button from '#/components/button';
import Header from '#/components/header';
import { addSnippet } from '#/modules/snippetList/pipeline';
import { allSnippetState } from '#/modules/snippetList/state';
import { css } from 'emotion';
import { For, Show } from 'solid-js/dom';
import SnippetItem from './snippetItem';

const wrapperStyles = css`
  width: 30%;
`;

const listStyles = css`
  display: flex;
  flex-direction: column;
`;

function SnippetList() {
  return (
    <div className={wrapperStyles}>
      <Header
        leftInfo={<div>BrowserStash</div>}
        rightInfo={<Button initializeRef={addSnippet}>Add</Button>}
      ></Header>
      <div className={listStyles}>
        <For
          each={(void 0, allSnippetState.list)}
          fallback={<div>No Snippet</div>}
        >
          {(snippet) => <SnippetItem>{(void 0, snippet.name)}</SnippetItem>}
        </For>
      </div>
      <Show when={(void 0, !!allSnippetState.new)}>
        <div className={wrapperStyles}>new editor</div>
      </Show>
    </div>
  );
}

export default SnippetList;
