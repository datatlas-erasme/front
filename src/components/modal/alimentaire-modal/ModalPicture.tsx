import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { StyledIconButton } from '../../buttons/IconButton';
import { device } from '../../../styles';

interface ModalPictureProps {
  onClick?: MouseEventHandler;
}

const CloseButton = styled(StyledIconButton)`
  position: absolute;
  right: 20px;
  top: 0;

  padding: 5px;
  background-color: #343f56;
  color: white;
  border-radius: 50%;
  height: 2.6em;
  width: 2.6em;
  opacity: 0.9;

  :hover {
    opacity: 1;
  }
`;

const ModalPicture = ({ onClick, ...props }: ModalPictureProps) => (
  <div className="modal-picture" {...props}>
    <CloseButton Icon={<FontAwesomeIcon icon={faXmark} />} onClick={onClick} />
    <img
      alt={'Unsplash'}
      src={
        'https://images.unsplash.com/photo-1543083477-4f785aeafaa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      }
    />
  </div>
);

export const StyledModalPicture = styled(ModalPicture)`
  background-color: white;
  display: block;
  right: 0;

  ${CloseButton} {
    color: white;
  }

  img {
    display: none;
  }

  svg {
    height: 2em;
  }

  @media ${device.lg} {
    width: 40%;

    ${CloseButton} {
      top: 10px;
    }

    img {
      display: flex;
      width: 100%;
      border-radius: 0 ${({ theme }) => theme.radii[5]} 0 80px;
    }
  }
`;
