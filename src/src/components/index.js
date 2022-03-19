import { Style }  from '../styles';
import {ViewportProvider} from '../utils/ViewportConext'
import MapContainer from './map';
import PanelControl from './panel';

export default function Front() {

  return (
    <ViewportProvider> 
        <Style/>
        <MapContainer />
        <PanelControl/>
      </ViewportProvider>

  );
}