import Header from '#/components/header';
import { css } from 'emotion';

const listStyles = css`
  width: 30%;
`;

function SnippetList() {
  return (
    <div className={listStyles}>
      <Header
        leftInfo={<div>BrowserStash</div>}
        rightInfo={<div>BrowserStash</div>}
      ></Header>
    </div>
  );
}

export default SnippetList;
