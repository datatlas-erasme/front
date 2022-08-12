import React from 'react';
import styled from 'styled-components';

const ImgLoad = styled.div`
  position: absolute;
  left: 64%;
`;

export default function Loader() {
  return (
    <ImgLoad>
      Loading...
      <img src={'../assets/logo/logo_gl.png'} alt={'Logo BelleBouffe'} />
    </ImgLoad>
  );
}
