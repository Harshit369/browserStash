import { Snippet } from '#/interfaces';

type intrinsicProps = JSX.HTMLAttributes<HTMLDivElement>;

interface externalProps {
  snippet: Snippet;
}

type Props = intrinsicProps & externalProps;

export default ({ snippet, ...props }: Props) => {
  return <div id="editor" style={{ height: '100%' }} {...props}></div>;
};
