import React, { ReactElement, useContext, useState } from 'react';
import styled from 'styled-components';
import { device } from '../../styles';
import TabContext from './TabContext';
import TabTitle from './TabTitle';

const TabNav = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: solid 1px ${({ theme }) => theme.colors.gray};
  @media ${device.lg} {
    padding: 0 60px;
  }
`;

interface ITabs {
  children?: ReactElement[];
  items: string[];
}

const Tabs: React.FC<ITabs> = ({ children, items }) => {
  const { activePanel, switchPanel } = useContext(TabContext);
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <>
      <TabNav>
        {children
          ? children.map((item, index) => (
              <TabTitle
                key={index}
                title={item.props.title}
                onClick={() => switchPanel(item)}
                index={index}
                isActive={activePanel === item}
                setSelectedTab={setSelectedTab}
              />
            ))
          : null}
      </TabNav>
      {children && children[selectedTab]}
    </>
  );
};

export default Tabs;
