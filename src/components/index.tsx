import React, { Suspense } from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '../styles';
import { ViewportProvider } from '../utils/ViewportConext';
import Header from './header';

const Map = React.lazy(() => import('./map'));
const PanelControl = React.lazy(() => import('./panel-control'));

const ImgLoad = styled.div`
  position: absolute;
  left: 64%;
`;

export default function Front({ theme, instance }: any) {
  console.log(instance);

  return (
    <ViewportProvider>
      <GlobalStyle theme={theme} />
      <Suspense
        fallback={
          <ImgLoad>
            coucou...
            <img src={'../assets/logo/logo_gl.png'} alt={'Logo BelleBouffe'} />
          </ImgLoad>
        }
      >
        <Header />
        <Map instance={instance} />
      </Suspense>
      <PanelControl instance={instance} />
    </ViewportProvider>
  );
}
