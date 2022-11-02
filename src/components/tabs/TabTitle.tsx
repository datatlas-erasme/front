import styled from 'styled-components';
import { device } from '../../styles';

interface IButtonTab {
  title: string;
  index: number;
  isActive: boolean;
  onClick: (switchPanel: any) => void;
  setSelectedTab: (index: number) => void;
}
const Button = styled.button.attrs({
  type: 'button',
  role: 'tab',
})`
  border: none;
  background: none;
  outline: none;
  padding: 10px;
  font-size: ${({ theme }) => theme.fontSizes.paragraphe};
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  transition: color 150ms linear;
&:hover {
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 20px 20px 0 0;
}
}
@media ${device.lg} {
  padding: 20px;
  font-size: ${({ theme }) => theme.fontSizes.xltext};
}
`;
const TabTitle: React.FC<IButtonTab> = ({ title, index, setSelectedTab }) => {
  return <Button onClick={() => setSelectedTab(index)}>{title}</Button>;
};

export default TabTitle;
