import { useContext } from 'react';
import { Style }  from '../styles';
import {ViewportProvider} from '../utils/ViewportConext'
import MapContainer from './map';
import PanelControl from './panel';

export default function Front({theme}) {

  return (
    <ViewportProvider> 
        <Style theme={theme}/>
        <MapContainer />
        <PanelControl />
      </ViewportProvider>

  );
}