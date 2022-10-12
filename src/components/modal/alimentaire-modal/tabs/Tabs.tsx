import { ReactElement, useState } from 'react';
import styled from 'styled-components';
import TabTitle from './TabTitle';

const TabStyle = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: solid 1px ${({ theme }) => theme.colors.gray};
`;

type Props = {
  children: ReactElement[];
};

const Tabs: React.FC<Props> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <>
      <TabStyle>
        {children.map((item, index) => (
          <TabTitle
            key={index}
            title={item.props.title}
            index={index}
            setSelectedTab={setSelectedTab}
          />
        ))}
      </TabStyle>
      {children[selectedTab]}
    </>
  );
};

export default Tabs;
