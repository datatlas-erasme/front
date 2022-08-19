import { Override } from '../../../../types/Override';

export type CheckboxProps = Override<React.ComponentPropsWithoutRef<'button'>, { text: string }>;

export default function Checkbox({ text }: CheckboxProps) {
  return (
    <>
      <input type="checkbox" />
      <label> {text.substring(0, 30)} </label>
    </>
  );
}
