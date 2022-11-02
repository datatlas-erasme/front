import styled from 'styled-components';
import { device } from '../../../styles';

export const WrapperModal = styled.div`
  display: flex;
  flex-wrap: wrap;

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 96vh;
  padding: 40px;

  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};

  border-top-right-radius: ${({ theme }) => theme.radii[5]};
  border-top-left-radius: ${({ theme }) => theme.radii[5]};
  box-shadow: 0px 2px 18px -1px rgba(0, 0, 0, 0.25);
  overflow: scroll;
  z-index: 99;

  h4 {
    font-size: ${({ theme }) => theme.fontSizes.xstext};
    font-weight: ${({ theme }) => theme.fontWeights[2]};
    padding-bottom: 5px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  }

  p,
  li,
  address {
    font-size: ${({ theme }) => theme.fontSizes.xstext};
    line-height: ${({ theme }) => theme.lineHeights.paragraph};
    font-style: italic;
    align-self: center;
  }

  @media ${device.lg} {
    flex-direction: row;
    left: 475px;
    bottom: 10px;
    top: 130px;
    width: 52vw;
    height: auto;
    padding: 0;
    border-bottom-right-radius: ${({ theme }) => theme.radii[5]};
    border-bottom-left-radius: ${({ theme }) => theme.radii[5]};
    h4 {
      font-size: ${({ theme }) => theme.fontSizes.paragraphe};
    }
  }

  @media ${device.xl} {
    left: 38%;
    width: 60vw;
  }
`;

export const TitleModal = styled.div`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.xltitle};
    line-height: ${({ theme }) => theme.lineHeights.title};
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.paragraphe};
    align-self: flex-start;
  }

  svg {
    height: auto;
  }

  @media ${device.lg} {
    padding-top: 30px;
    padding-left: 30px;
  }
`;

export const ModalHeading = styled.div`
  display: flex;
  height: fit-content;
  width: 100%;
  justify-content: space-between;
  ${TitleModal} {
    display: flex;
    h2 {
      font-size: ${({ theme }) => theme.fontSizes.xltitle};
      line-height: ${({ theme }) => theme.lineHeights.title};
    }
  }
  @media ${device.lg} {
    ${TitleModal} {
      padding: 30px 0 0 30px;
      h2 {
        margin-bottom: 10px;
      }
    }
  }
}`;

export const ModalColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ModalColLeft = styled(ModalColumn)`
  a {
    button {
      width: 200px;
      margin: 20px auto;
      padding: 10px;

      background-color: ${({ theme }) => theme.colors.red};
      border-radius: ${({ theme }) => theme.radii[6]};
      border: none;
      color: ${({ theme }) => theme.colors.secondary};
      text-decoration: none;

      cursor: pointer;

      &:hover {
        opacity: 0.5;
      }
    }
    @media ${device.lg} {
      margin: 10% auto;
    }
  }

  @media ${device.lg} {
    width: 60%;
    padding-left: 30px;
  }
`;

export const ModalColRight = styled(ModalColumn)`
  img {
    display: none;
  }

  svg {
    position: absolute;
    height: 2em;
    color: ${({ theme }) => theme.colors.primary};
    right: 25px;
    top: 15px;
  }

  @media ${device.lg} {
    width: 40%;

    img {
      display: flex;
    }

    svg {
      height: 2em;
      cursor: pointer;
    }
  }
`;

export const ProvenanceList = styled.div`
  margin: 20px 0;
  ul {
    display: flex;
  }

  li {
    padding: 5px 10px !important;
    margin: 5px !important;
    border-radius: ${({ theme }) => theme.radii[5]};
    font-size: ${({ theme }) => theme.fontSizes.xstext};
    color: ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.colors.primary} !important;

    @media ${device.lg} {
      margin: 20px 5px;
    }
  }

  @media ${device.lg} {
    width: 80%;
  }
`;

export const InfoPratique = styled.ul`
  li {
    display: flex;
    margin: 10px 0;
    ul {
      display: flex;
      flex-direction: column;
      padding-left: 0px;
      li {
        margin-left: 10px;
      }
    }
    p {
      margin-left: 10px;
      font-size: ${({ theme }) => theme.fontSizes.paragraphe};
      color: ${({ theme }) => theme.colors.red};
      font-weight: ${({ theme }) => theme.fontWeights[5]};
    }

    @media ${device.lg} {
      img {
        overflow: visible;
        width: 30px;
        height: 30px;
      }
    }
  }

  @media ${device.lg} {
    margin: auto;
    width: 80%;
  }
`;

export const InfoPratiqueGlobal = styled.ul`
  display: block;
  width: 100vw;

  li {
    font-size: ${({ theme }) => theme.fontSizes.xstext};
    line-height: ${({ theme }) => theme.lineHeights.normal};
    display: flex;
    margin-top: 15px;
    width: 100%;
    p {
      margin-top: 0;
      margin-left: 10px;
      &:nth-child(3) {
        font-size: ${({ theme }) => theme.fontSizes.paragraphe};
        color: ${({ theme }) => theme.colors.red};
        font-weight: ${({ theme }) => theme.fontWeights[5]};
        text-align: center;
      }
    }
  }

  @media ${device.lg} {
    display: flex;
    justify-content: space-around;
    padding: 10px 20px !important;

    li {
      display: flex;
      margin-bottom: 5px;
      width: 70%;
      &:nth-child(2) {
        width: auto;
        margin-left: 10px;
      }
      &:last-child {
        ul {
          li {
            &:last-child {
              margin-left: 0;
            }
          }
        }
      }
    }
  }
`;

export const LabelRow = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 0;

    ul{
      display: flex;
      flex-wrap: wrap;
      li{
        font-size: ${({ theme }) => theme.fontSizes.xstext};
        margin: 5px;
      }
    }
    p{
      margin-top: 10px;
      font-style: normal;
      font-size: ${({ theme }) => theme.fontSizes.xstext};
      line-height: ${({ theme }) => theme.lineHeights.paragraph};
    }
    img{
      border-radius: 0;
      width: auto;
      height: 50px;
    }

    @media ${device.lg} {
      width: 80%;
      margin-top: 40px;
`;

export const ProductRow = styled.div`
  display: flex;
  flex-direction: column;

  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      display: flex;
      margin: 5px;
      p {
        font-style: normal;
        font-size: ${({ theme }) => theme.fontSizes.xstext};
        line-height: ${({ theme }) => theme.lineHeights.paragraph};
        margin-left: 5px;
      }
      img {
        display: block;
        width: 25px;
        height: 25px;
      }
    }
  }

  @media ${device.lg} {
    width: 80%;
    margin-top: 40px;
    ul {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export const BottomButton = styled.a`
  width: 100%;
  height: 100px;
  margin: auto;
  button {
    display: flex;
    align-self: center;
    margin: auto;
    margin-top: 40px;
    border: none;
    background-color: ${({ theme }) => theme.colors.secondary};
    p {
      padding-left: 10px;
      background-color: ${({ theme }) => theme.colors.secondary};
      text-decoration-line: underline;
      font-size: ${({ theme }) => theme.fontSizes.paragraphe};
    }
  }
`;

export const TabsMarket = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 45vh;
  margin: 0;
  padding: 20px 0;
`;
