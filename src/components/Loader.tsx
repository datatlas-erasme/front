import React from 'react';
import styled from 'styled-components';
import logoGL from '../assets/logo/logo_gl.png';

const ImgLoad = styled.div`
  position: absolute;
  left: 64%;
`;

export default function Loader() {
  return (
    <ImgLoad>
      Loading...
      <img src={logoGL} alt={'Logo Grand Lyon'} />
    </ImgLoad>
  );
}
