import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';

type IProps = {
  id: string;
  children: ReactNode;
  setselectedTab: () => void;
};

interface ITab {
  title: string;
}

const TabList = styled(animated.ul)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
`;

const Tab: React.FC<ITab> = ({ children }) => {
  const transitions = useTransition(children, {
    from: {
      transform: 'translateX(-50%)',
      opacity: 0,
      zIndex: 1,
    },
    enter: {
      transform: 'translateX(0)',
      position: 'relative',
      zIndex: 2,
      opacity: 1,
      width: '100%',
    },
    leave: { transform: 'translateX(50%)', opacity: 0, position: 'relative' },
    update: { position: 'static' },
  });

  return transitions((style, items) => <TabList style={style}>{items}</TabList>);
};

export default Tab;
