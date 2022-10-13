import styled, { keyframes } from 'styled-components';

export const WarpperMobilebutton = styled.div`
  position: fixed;
  bottom: 40px;
  display: flex;
  flex-direction: column;
  align-self: end;
  margin: auto;
  left: 50%;
  transform: translateX(-50%);
`;

const AnimOpenMenu = keyframes`
  from{
    opacity: 0;
    scale: 0;
    transform: translateY(0);
  }
  to {
    opacity: 1;
    transform: translateY(-50%);
  }
`;

const AnimCloseMenu = keyframes`
  0%{
    transform: translate(0, 0);
    opacity: 0;
    scale: 0;
  }
  100%{
    transform: translate(0, 10%s);
  }
`;
export const NavButton = styled.button`
  border: none;
  background: rgba(255, 255, 255, 0);

  p {
    display: none;
  }

  span {
    svg {
      color: ${({ theme }) => theme.colors.red};
      background: ${({ theme }) => theme.colors.background};
      border-radius: 50%;
      width: 60px;
      height: 60px;
    }
  }
`;

export const ExtLink = styled.a`
  position: relative;
  width: 70vw;
  margin: 10px auto;
  padding: 10px;
  border-radius: 33px;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  animation: ${AnimOpenMenu} ease-in-out 0.75s both;
  &[isShow='true'] {
    animation: ${AnimCloseMenu} ease-in-out 0.75s both;
  }
`;
