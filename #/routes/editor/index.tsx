import Editor from '#/components/editor';
import Header from '#/components/header';
import { initializeEditor } from '#/modules/editor/pipeline';
import { css } from 'emotion';

const editorWrapperStyles = css`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

const editorStyles = css`
  height: 100%;
`;

function Snippet() {
  return (
    <div className={editorWrapperStyles}>
      <Header
        leftInfo={<div>BrowserStash</div>}
        rightInfo={<div>BrowserStash</div>}
      ></Header>
      <Editor
        className={editorStyles}
        initializeEditor={initializeEditor}
      ></Editor>
    </div>
  );
}

export default Snippet;
