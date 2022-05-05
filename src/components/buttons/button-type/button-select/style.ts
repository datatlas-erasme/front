import styled from 'styled-components';
import { device } from '../../../../styles/breakpoints';
import { Base } from '../../../../styles/themes';
import px2vw from '../../../../utils/px2vw';

export const ButtonType = styled.button`
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  cursor: pointer;

  font-weight: ${px2vw(400)};
  font-size: ${px2vw(Base.fontSizes.xstext)};

  div {
    display: flex;
    align-items: center;
    width: 50px;
    height: 50px;
    padding: 10px;
    border-radius: 50px;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    box-sizing: border-box;

    &:hover {
      background: ${({ theme }) => theme.colors.secondary};
      border-color: ${({ theme }) => theme.colors.primary};
    }

    &.active {
      background: ${({ theme }) => theme.colors.primary};
    }
  }

  p {
    display: block;
    width: auto;
    text-align: left;
    padding-left: 10px;
  }

  @media ${device.lg} {
    background-color: #fcfafa;
  }
`;
