import { afterEffects } from 'solid-js';

type intrinsicProps = JSX.HTMLAttributes<HTMLDivElement>;

interface externalProps {
  initializeEditor: () => void;
}

type Props = intrinsicProps & externalProps;

export default (props: Props) => {
  afterEffects(props.initializeEditor);

  const { children, ...rest } = props;

  return (
    <div id="editor" {...rest}>
      {(void 0, props.children)}
    </div>
  );
};
