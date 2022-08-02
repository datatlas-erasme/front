import styled from 'styled-components';
import { datalimentaire, Base } from '../../styles';
import { device } from '../../styles/breakpoints';

export const WrapperModal = styled.div`
  display: flex;
  flex-direction: column;

  position: fixed;
  top: 2vh;
  left: 5%;

  width: 90vw;
  height: 95vh;
  margin: auto;
  padding: 40px;

  background: ${datalimentaire.colors.secondary};
  color: ${datalimentaire.colors.primary};

  border-radius: ${Base.radii[5]};
  box-shadow: 0px 2px 18px -1px rgba(0, 0, 0, 0.25);

  z-index: 99;

  p {
    font-size: ${Base.fontSizes.paragraphe};
    line-height: ${Base.lineHeights.normal};
    padding: 10px 0;
  }

  button {
    width: 200px;
    margin: 20px auto;
    padding: 10px;

    background-color: ${datalimentaire.colors.red};
    border-radius: ${Base.radii[6]};
    border: none;
    color: ${datalimentaire.colors.secondary};

    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }
  }

  li {
    font-size: ${Base.fontSizes.paragraphe};
    display: flex;
    margin: 20px 0;
  }

  @media ${device.lg} {
    padding: 0;
    flex-direction: row;
    left: 37%;
    width: 60vw;
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
      display: block;
      border-radius: 0 ${Base.radii[5]} 0 80px;
    }

    svg {
      height: 2em;
      color: white;
      cursor: pointer;
    }
  } ;
`;

export const ModalColLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media ${device.lg} {
    width: 60%;
    padding: 40px 0 20px 40px;
  }
`;
export const ModalHeading = styled.div`
  display: flex;
  flex-direction: column;
  div {
    padding: 10px 0 10px 10px;
    flex-direction: column;
  }
  h2 {
    font-size: ${Base.fontSizes.xltitle};
    line-height: ${Base.lineHeights.title};
  }

  @media ${device.lg} {
    flex-direction: row;

    h2 {
      font-size: ${Base.fontSizes.xstitle};
      line-height: ${Base.lineHeights.title};
    }
  }
`;
export const LabelRow = styled.div`
  display: flex;
  img {
    border-radius: 0;
  }
`;