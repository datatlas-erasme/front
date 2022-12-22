import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';

interface ITab {
  title: string;
  children: ReactNode;
}

const TabList = styled(animated.ul)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  width: 100%;
`;

const Tab: React.FC<ITab> = ({ children }) => {
  const transitions = useTransition(children, {
    keys: null,
    from: {
      transform: 'translate3d(-100%,0,0)',
      opacity: 0,
      zIndex: 0,
    },
    enter: {
      transform: 'translate3d(0,0,0)',
      position: 'relative',
      zIndex: 1,
      opacity: 1,
    },
    leave: {
      transform: 'translate3d(-100%,0,0)',
      opacity: 0,
      zIndex: 0,
    },
    update: { position: 'static' },
    config: { duration: 400 },
    exitBeforeEnter: true,
  });

  return transitions((style, items) => {
    return <TabList style={style}>{items}</TabList>;
  });
};

export default Tab;
