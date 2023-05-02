import React, { MouseEventHandler, ReactElement } from 'react';
import styled from 'styled-components';

interface IconButtonInterface {
  Icon: ReactElement;
  onClick?: MouseEventHandler;
}

const IconButton = ({ Icon, onClick, ...props }: IconButtonInterface) => {
  return (
    <a onClick={onClick} {...props}>
      {Icon}
    </a>
  );
};

export const StyledIconButton = styled(IconButton)`
  display: flex;
  justify-content: center;
  cursor: pointer;
  color: white;
`;
