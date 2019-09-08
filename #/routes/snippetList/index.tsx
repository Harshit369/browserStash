import Button from '#/components/button';
import Header from '#/components/header';
import { addSnippet } from '#/modules/snippetList/pipeline';
import { allSnippetState } from '#/modules/snippetList/state';
import { css } from 'emotion';
import { Match } from 'solid-js/types/dom';
import Snippet from '../editor';

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
        rightInfo={<Button forwardRef={addSnippet}>Add</Button>}
      ></Header>
      <div className={listStyles}>
        {
          (void 0,
          allSnippetState.list.map(() => {
            return <Snippet></Snippet>;
          }))
        }
      </div>
      <Match when={(void 0, !!allSnippetState.new)}>
        <div className={wrapperStyles}>new editor</div>
      </Match>
    </div>
  );
}

export default SnippetList;
