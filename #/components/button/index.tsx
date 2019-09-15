import { css } from 'emotion';

type intrinsicProps = JSX.HTMLAttributes<HTMLButtonElement>;

type Props = intrinsicProps & {
  initializeRef: intrinsicProps['forwardRef'];
};

const style = css`
  height: 32px;
  display: flex;
  justify-content: center;
  padding: 0 12px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: background-color 0.25s ease-out 0s, color 0.25s ease-out 0s;
`;

const Button = (props: Props) => {
  const { children, className, initializeRef, ...rest } = props;
  return (
    <button
      className={`${style} ${className}`}
      {...rest}
      forwardRef={initializeRef}
    >
      {(void 0, props.children)}
    </button>
  );
};

export default Button;
