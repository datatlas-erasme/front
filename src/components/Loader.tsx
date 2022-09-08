import React from 'react';
import { ProgressBar } from 'erasme-kepler.gl/components';
import styled from 'styled-components';
import logoGL from '../assets/logo/logo_gl.png';

const ImgLoad = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30% auto;
  img {
    width: 80vw;
  }
`;

const CustomProgressBar = () => ProgressBar;

export default function Loader() {
  return (
    <ImgLoad>
      <CustomProgressBar />
      Loading...
      <img src={logoGL} alt={'Logo Grand Lyon'} />
    </ImgLoad>
  );
}
