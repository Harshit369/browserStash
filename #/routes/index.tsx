import Header from '#/components/header';
import { css } from 'emotion';

const wrapperStyles = css`
  height: 100vh;
  width: 100vh;
  display: flex;
`;

const listStyles = css``;

const editorWrapperStyles = css``;

function Routes() {
  return (
    <div className={wrapperStyles}>
      <div className={listStyles}>
        <Header
          leftInfo={<div>BrowserStash</div>}
          rightInfo={<div>BrowserStash</div>}
        ></Header>
      </div>
      <div className={editorWrapperStyles}>
        <Header
          leftInfo={<div>BrowserStash</div>}
          rightInfo={<div>BrowserStash</div>}
        ></Header>
      </div>
    </div>
  );
}

export default Routes;
