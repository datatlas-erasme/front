import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { device } from '../../styles';
import { useViewport } from '../../utils/ViewportConext';
import ButtonSwitch from '../buttons/button-type/button-switch';
import px2vw from '../../utils/px2vw';
import LogoGl from '../../assets/logo/logo_gl.png';
import LogoMl from '../../assets/logo/logo-mangerlocal.png';

const HeaderBlock = styled.header`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  height: auto;

  background-color: ${({ theme }) => theme.colors.secondary};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);

  nav {
    display: flex;
    justify-content: space-between;
    a {
      position: fixed;
      bottom: 150px;
      right: 40px;
      color: ${({ theme }) => theme.colors.red};
      p {
        display: none;
      }
      svg {
        color: ${({ theme }) => theme.colors.primary};
        background: ${({ theme }) => theme.colors.background};
        border-radius: 50%;
        width: 60px;
        height: 60px;
      }
    }
  }

  @media ${device.lg} {
    nav {
      margin: 0.25rem 5rem;
      a {
        position: static;
        display: flex;
        align-items: center;
        p {
          display: block;
          margin-right: 10px;
          font-size: ${({ theme }) => theme.fontSizes.xltext};
          font-weight: ${({ theme }) => theme.fontWeights[5]};
        }
        svg {
          width: 35px;
          height: 35px;
        }
      }
    }
  }
`;

const PreHeader = styled.div`
  padding: 5px;
  background-color: #ca3228;
  p {
    text-align: center;
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 10px;
    @media ${device.sm} {
      font-size: ${({ theme }) => theme.fontSizes.xstext};
    }
  }
`;

const BlockLogo = styled.div`
  display: flex;
  padding: 1rem;
  img {
    width: auto;
    height: 2.5vh;
    &:last-child {
      border-left: 1px solid ${({ theme }) => theme.colors.red};
      padding-left: 0;
      margin-left: ${px2vw(20)};
    }
  }

  @media ${device.lg} {
    img {
      height: 5vh;
    }
  }
`;

export default function Header() {
  const { width } = useViewport();
  const breakpoint = 1024;

  return (
    <HeaderBlock>
      <PreHeader>
        <p>Ce site est diffusé dans le cadre d’une expérimentation.</p>
      </PreHeader>

      <nav>
        <BlockLogo>
          <img src={LogoGl} alt="Logo Grand Lyon" />
          <img src={LogoMl} alt="Logo Manger Local" />
        </BlockLogo>
        <a href={'#'}>
          <p>En savoir plus sur le projet</p>
          <FontAwesomeIcon icon={faInfoCircle} />
        </a>
        {width < breakpoint ? <ButtonSwitch /> : null}
      </nav>
    </HeaderBlock>
  );
}
