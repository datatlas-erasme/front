import { createContext, useEffect, useContext, useState } from 'react';
import { Style }  from '../styles';
import { device, size } from '../styles/breakpoints';
import {ViewportProvider} from '../utils/ViewportConext'
import MapContainer from './map';
import PanelControl from './panel';
import {DesktopPanelControl} from './filters-desktop';
import {MobilePanelControl} from './filters-mobile';

// Responsive component
// const viewportContext = createContext({});
// const ViewportProvider = ({ children }) => {
//   const [width, setWidth] = useState(window.innerWidth);
//   const [height, setHeight] = useState(window.innerHeight);
//   const handleWindowResize = () => {
//     setWidth(window.innerWidth);
//     setHeight(window.innerHeight);
//   };

//   useEffect(() => {
//     window.addEventListener("resize", handleWindowResize);

//     return () => window.removeEventListener("resize", handleWindowResize);
//   }, []);

//   return (
//     <ViewportProvider value={{ width, height }}>
//       {children}
//     </ViewportProvider>
//   );
// };
// const useViewport = () => {
//   const { width, height } = useContext(viewportContext);

//   return { width, height };
// };
// const MobilePanelControl = () => <p>"Hmmm... Why is your screen so small?"</p>;
// const DesktopPanelControl = () => <p>"Wow, your screen is big!"</p>;
// const PanelControl = () => {
//   const { width } = useViewport();
//   const breakpoint = 1024;

//   return (

//     width < breakpoint ? <MobilePanelControl /> : <DesktopPanelControl />
    
//     );
// };

export default function Front() {

  return (
    <ViewportProvider> 
        <Style/>
        <MapContainer />
        <PanelControl/>
      </ViewportProvider>

  );
}