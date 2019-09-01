import { initializeEditor } from '#/modules/editor/pipeline';

type Props = JSX.HTMLAttributes<'div'>;

export default (__: Props) => {
  return (
    <div
      forwardRef={initializeEditor}
      id="editor"
      style={{ height: '100%' }}
    ></div>
  );
};
