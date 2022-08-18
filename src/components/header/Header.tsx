import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { device } from '../../styles';
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

  nav {
    display: flex;
    margin-top: 5vh;
    a {
      position: absolute;
      top: 580px;
      right: 25px;
      color: ${({ theme }) => theme.colors.red};
      p {
        display: none;
      }
      svg {
        width: 60px;
        height: 60px;
      }
    }
  }

  @media ${device.lg} {
    background-color: ${({ theme }) => theme.colors.secondary};

    nav {
      display: flex;
      justify-content: space-between;
      margin: 1rem 5rem;
      a {
        display: flex;
        align-items: center;
        p {
          margin-right: 10px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  background-color: ${({ theme }) => theme.colors.red};
  p {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${({ theme }) => theme.fontSizes.xstext};
  }
`;

const BlockLogo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  img {
    width: 20vw;
    height: auto;
  }

  @media ${device.lg} {
    background-color: ${({ theme }) => theme.colors.secondary};
    margin: 1rem;
    img {
      width: auto;
      height: 5vh;
      &:last-child {
        border-left: 1px solid ${({ theme }) => theme.colors.red};
        padding-left: 0;
        margin-left: 0.75rem;
      }
    }
  }
`;

export default function Header() {
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
          <FontAwesomeIcon icon={faArrowCircleRight} />
        </a>
      </nav>
    </HeaderBlock>
  );
}
