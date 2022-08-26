import styled from 'styled-components';
import px2vw from '../../../utils/px2vw';

export const ButtonCollapse = styled.button`
  height: auto;
  padding: 8px 15px;
  margin: ${px2vw(15)};

  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.radii[4]};
  border: none;

  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  box-shadow: 3px 6px 10px rgba(0, 0, 0, 0.08);

  transition: all ease-in-out 0.2s;

  &.active {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
  }

  h4 {
    font-weight: ${({ theme }) => theme.fontWeights[5]};
    font-size: ${({ theme }) => theme.fontSizes.xstext};
  }
`;

export const SubHeading = styled.h4`
  display: block;
  width: 100%;
  padding: 10px;
  border-radius: 35px 35px 0px 0px;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.xstext};

  span {
    padding-left: 10px;
  }
`;
