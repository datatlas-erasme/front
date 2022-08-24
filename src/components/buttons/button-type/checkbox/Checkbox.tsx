import styled from 'styled-components';
import { Override } from '../../../../types/Override';

export const LabelCheckbox = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.xstext};
`;
export const InputCheckbox = styled.input`
  accent-color: ${({ theme }) => theme.colors.primary};
`;

export type CheckboxProps = Override<React.ComponentPropsWithoutRef<'button'>, { text: string }>;

export default function Checkbox({ text }: CheckboxProps) {
  return (
    <>
      <InputCheckbox type="checkbox" />
      <LabelCheckbox> {text.substring(0, 30)} </LabelCheckbox>
    </>
  );
}
