import { theme } from '#/theme';
import { css } from 'emotion';

const wrapperStyles = css`
  height: 56px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  background-color: ${theme.header};
  padding: 8px 16px;
`;

const leftInfoWrapperStyles = css`
  display: flex;
  align-items: center;
  height: 100%;
`;

const rightInfoWrapperStyles = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
`;

interface Props {
  leftInfo: JSX.Element;
  rightInfo: JSX.Element;
}

function Header(props: Props) {
  return (
    <div className={wrapperStyles}>
      <div className={leftInfoWrapperStyles}>{props.leftInfo}</div>
      <div className={rightInfoWrapperStyles}>{props.rightInfo}</div>
    </div>
  );
}

export default Header;
