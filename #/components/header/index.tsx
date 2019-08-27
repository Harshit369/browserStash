import { history } from '#/router';
import { css } from 'emotion';

const styles = css`
  text-decoration: none;
  font-size: 28px;
  font-weight: 600;
  transition: all 0.5s ease-in-out;
  transform-origin: top left;
  will-change: transform;
  position: fixed;
  top: 180px;
  left: calc(50% - 100px);
`;

function Header() {
  return (
    <a
      href="/"
      onClick={(e) => {
        e.preventDefault();

        history.push('/');
      }}
      className={styles}
    >
      Pockeymon
    </a>
  );
}

export default Header;
