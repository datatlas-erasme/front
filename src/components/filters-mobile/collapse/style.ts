import styled from 'styled-components';
import px2vw from '../../../utils/px2vw';

export const ButtonCollapse = styled.button`
  height: auto;
  padding: ${px2vw(10)} ${px2vw(20)};
  margin: ${px2vw(15)};

  box-sizing: border-box;
  border-radius: ${px2vw(40)};
  border: 1px solid ${({ theme }) => theme.colors.gray};

  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};

  transition: all ease-in-out 0.2s;

  font-weight: 500;
  font-size: ${px2vw(16)};
  text-align: left;

  &.active {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
  }

  h4 {
    font-weight: ${({ theme }) => theme.fontWeights[4]};
    font-size: ${({ theme }) => theme.fontSizes.xstext};
  }
`;

export const SubHeading = styled.h4`
  display: block;
  width: 80%;
  margin: 25px auto 0 auto;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 35px 35px 0px 0px;

  font-size: ${({ theme }) => theme.fontSizes.xstext};
`;
