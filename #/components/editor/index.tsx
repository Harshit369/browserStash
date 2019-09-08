import { afterEffects } from 'solid-js';

type intrinsicProps = JSX.HTMLAttributes<HTMLDivElement>;

interface externalProps {
  initializeEditor: () => void;
}

type Props = intrinsicProps & externalProps;

export default ({ children, ...props }: Props) => {
  afterEffects(props.initializeEditor);

  return (
    <div id="editor" style={{ height: '100%' }} {...props}>
      {children}
    </div>
  );
};
