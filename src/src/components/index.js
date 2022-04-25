import { useContext } from 'react';
import { Style }  from '../styles';
import {ViewportProvider} from '../utils/ViewportConext'
import { useAPI } from '../providers/ConfProvider';
import MapContainer from './map';
import PanelControl from './panel';

export default function Front({theme}) {

  const { instance } = useAPI();
  console.log("LOAD INSTANCE In FRONT COMPONENT")
  console.log(instance);

  return (
    <ViewportProvider> 
        <Style theme={theme}/>
        <MapContainer />
        <PanelControl />
      </ViewportProvider>

  );
}