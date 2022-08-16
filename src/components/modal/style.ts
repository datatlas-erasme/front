import styled from 'styled-components';
import { device, datalimentaire, Base } from '../../styles';

export const WrapperModal = styled.div`
  display: flex;
  flex-wrap: wrap;

  position: fixed;
  top: 1vh;
  left: 5%;

  width: 90vw;
  height: auto;
  margin: auto;
  padding: 40px;

  overflow-y: scroll;

  background: ${datalimentaire.colors.secondary};
  color: ${datalimentaire.colors.primary};

  border-radius: ${Base.radii[5]};
  box-shadow: 0px 2px 18px -1px rgba(0, 0, 0, 0.25);

  z-index: 99;

  h4 {
    font-size: ${Base.fontSizes.paragraphe};
    font-weight: ${Base.fontWeights[2]};
    padding-bottom: 5px;
    border-bottom: 1px solid ${datalimentaire.colors.gray};
  }

  p,
  li,
  address {
    font-size: ${Base.fontSizes.paragraphe};
    line-height: ${Base.lineHeights.normal};
    font-style: italic;
    align-self: center;
  }

  @media ${device.lg} {
    padding: 0;
    flex-direction: row;
    left: 47%;
    width: 50vw;
    height: auto;
    top: 5%;
  }

  @media ${device.xl} {
    left: 38%;
    width: 60vw;
  }
`;
export const ModalColLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  a {
    button {
      width: 200px;
      margin: 20px auto;
      padding: 10px;

      background-color: ${datalimentaire.colors.red};
      border-radius: ${Base.radii[6]};
      border: none;
      color: ${datalimentaire.colors.secondary};
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
export const ModalColRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  img {
    display: none;
  }

  svg {
    position: absolute;
    height: 2em;
    color: ${datalimentaire.colors.primary};
    right: 25px;
    top: 15px;
  }

  @media ${device.lg} {
    width: 40%;

    img {
      display: flex;
      border-radius: 0 ${Base.radii[5]} 0 80px;
    }

    svg {
      height: 2em;
      color: white;
      cursor: pointer;
    }
  }
`;
export const ModalHeading = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  div {
    &:first-child {
      h2 {
        font-size: ${Base.fontSizes.xltitle};
        line-height: ${Base.lineHeights.title};
        margin-bottom: 10px;
      }

      @media ${device.lg} {
        padding: 30px 0 0 30px;
      }
    }
    &:last-child {
      img {
        display: none;
      }
      svg {
        position: absolute;
        height: 2em;
        color: ${datalimentaire.colors.primary};
        right: 25px;
        top: 15px;
      }
      @media ${device.lg} {
        width: 40%;
        img {
          display: flex;
          width: 100%;
          border-radius: 0 ${Base.radii[5]} 0 80px;
        }

        svg {
          height: 2em;
          color: white;
          cursor: pointer;
        }
      }
    }
  }
`;

export const ProvenanceList = styled.div`
  margin: 20px 0;
  ul {
    display: flex;
  }

  li {
    width: auto;
    padding: 5px 10px;
    margin: 5px;
    border-radius: ${Base.radii[5]};
    font-size: ${Base.fontSizes.xstext};
    color: ${datalimentaire.colors.secondary};
    background-color: ${datalimentaire.colors.primary};

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
    }

    @media ${device.lg} {
      img {
        width: 30px;
        height: 30px;
      }
    }
  }

  @media ${device.lg} {
    width: 80%;
  }
`;
export const TitleModal = styled.div`
  width: 60%;
  flex-direction: column;

  h2 {
    font-size: ${Base.fontSizes.xltitle};
    line-height: ${Base.lineHeights.title};
    margin-bottom: 10px;
  }

  p {
    font-size: ${Base.fontSizes.xstitle};
  }

  svg {
    height: auto;
  }

  @media ${device.lg} {
    flex-direction: row;
    padding-top: 30px;
    padding-left: 30px;
  }
`;

export const InfoPratiqueGlobal = styled.ul`
  display: block;
  width: 100%;

  li {
    font-size: ${Base.fontSizes.paragraphe};
    line-height: ${Base.lineHeights.normal};
    display: flex;
    margin-top: 15px;
    ul {
      padding-left: 10px;
      li {
        margin-top: 0;
      }
    }
  }

  @media ${device.lg} {
    display: flex;
    justify-content: space-around;
    margin-top: 20px !important;
    li {
      display: flex;
      margin-bottom: 5px;
      &:nth-child(2) {
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
        font-size: ${Base.fontSizes.xstext};
        margin: 5px;
      }
    }
    p{
      margin-top: 10px;
      font-style: normal;
      font-size: ${Base.fontSizes.xstext};
      line-height: ${Base.lineHeights.paragraph};
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
        font-size: ${Base.fontSizes.xstext};
        line-height: ${Base.lineHeights.paragraph};
        margin-left: 5px;
      }
    }
  }

  @media ${device.lg} {
    width: 80%;
    margin-top: 40px;
    ul {
      display: grid;
      grid-template-columns: 1fr 1fr;
      li {
        img {
          width: 25px;
          height: 25px;
        }
      }
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
    background-color: ${datalimentaire.colors.secondary};
    p {
      padding-left: 10px;
      background-color: ${datalimentaire.colors.secondary};
      text-decoration-line: underline;
      font-size: ${Base.fontSizes.paragraphe};
    }
  }
`;
