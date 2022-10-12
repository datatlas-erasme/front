import styled from 'styled-components';

const TabLinks = styled.button`
  padding: 10px;
  background: none;
  border: none;
`;

type Props = {
  title: string;
  index: number;
  setSelectedTab: (index: number) => void;
};

const TabTitle: React.FC<Props> = ({ title, setSelectedTab, index }) => {
  return (
    <li>
      <TabLinks onClick={() => setSelectedTab(index)}>{title}</TabLinks>
    </li>
  );
};

export default TabTitle;
