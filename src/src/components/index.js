import React, { Suspense } from 'react';
import styled from 'styled-components';
import { Style }  from '../styles';
import {ViewportProvider} from '../utils/ViewportConext'

const Map = React.lazy(() => import('./map'));
const Panel = React.lazy(() => import('./panel'));

const ImgLoad = styled.div`
  position: absolute;
  left: 64%;
`
export default function Front() {

  return (
    <ViewportProvider> 
        <Style/>
        <Suspense fallback={<ImgLoad>Loading...<img src={'../assets/logo/logo_gl.png'} alt={'Logo BelleBouffe'}/></ImgLoad>}>
          <Map/>
        </Suspense>
          <Panel/>
      </ViewportProvider>

  );
}