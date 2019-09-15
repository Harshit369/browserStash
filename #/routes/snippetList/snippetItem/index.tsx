import { css } from 'emotion';

type intrinsicProps = JSX.HTMLAttributes<HTMLDivElement>;

type Props = intrinsicProps;

const style = css`
  padding: 12px;
  height: 100px;
`;

const SnippetItem = (props: Props) => {
  const { children, className, ...rest } = props;
  return (
    <div className={`${style} ${className}`} {...rest}>
      {(void 0, children)}
    </div>
  );
};

export default SnippetItem;
