import { css } from 'emotion';

const wrapperStyles = css`
  height: 32px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
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
  leftInfo: any;
  rightInfo: any;
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
