import Snippet from '#/routes/snippet';
import SnippetList from '#/routes/snippetList';
import { css } from 'emotion';

const wrapperStyles = css`
  height: 100vh;
  width: 100vw;
  display: flex;
`;

function Routes() {
  return (
    <div className={wrapperStyles}>
      <SnippetList />
      <Snippet />
    </div>
  );
}

export default Routes;
