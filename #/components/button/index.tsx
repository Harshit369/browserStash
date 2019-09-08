import { css } from 'emotion';

type intrinsicProps = JSX.HTMLAttributes<HTMLButtonElement>;

type Props = intrinsicProps;

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

const Button = ({ children, className, ...props }: Props) => {
  return (
    <button className={`${style} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
