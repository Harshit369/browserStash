import Header from '#/components/header';
import { allSnippetState } from '#/modules/snippetList/state';
import { css } from 'emotion';
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
        rightInfo={<div>BrowserStash</div>}
      ></Header>
      <div className={listStyles}>
        {
          (void 0,
          allSnippetState.list.map(() => {
            return <Snippet></Snippet>;
          }))
        }
      </div>
    </div>
  );
}

export default SnippetList;
