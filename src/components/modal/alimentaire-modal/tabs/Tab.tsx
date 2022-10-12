import React from 'react';
import { ModalList } from '../style';

type Props = {
  title: string;
};

const Tab: React.FC<Props> = ({ children }) => {
  return <ModalList>{children}</ModalList>;
};

export default Tab;
