import { Style }  from '../assets/styles';
import MapContainer from './map';
import PanelControl from './panel';

export default function Front() {

  return (
    <> 
        <Style/>
        <MapContainer />
        <PanelControl/>
    </>

  );
}