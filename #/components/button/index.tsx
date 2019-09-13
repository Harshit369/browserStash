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

const Button = ({ children, className, initializeRef, ...props }: Props) => {
  return (
    <button
      className={`${style} ${className}`}
      {...props}
      forwardRef={initializeRef}
    >
      {children}
    </button>
  );
};

export default Button;
