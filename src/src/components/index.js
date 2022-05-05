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
export default function Front({theme, instance}) {

  return (
    <ViewportProvider> 
        <Style theme={theme}/>
          <Map instance={instance}/>
          <Panel theme={theme}/>
    </ViewportProvider>
  )
}