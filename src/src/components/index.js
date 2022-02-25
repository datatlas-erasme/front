import { createContext, useEffect, useContext, useState } from 'react';
import { Style }  from '../assets/styles';
import { device, size } from '../assets/styles/breakpoints';
import MapContainer from './map';
import DesktopPanelControl from './panel';

const viewportContext = createContext({});

const ViewportProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};

const useViewport = () => {
  const { width, height } = useContext(viewportContext);

  return { width, height };
};

const MobileComponent = () => <p>"Hmmm... Why is your screen so small?"</p>;
// const DesktopPanelControl = () => <p>"Wow, your screen is big!"</p>;

const PanelControl = () => {
  const { width } = useViewport();
  const breakpoint = 768;

  console.log(breakpoint);

  return width < breakpoint ? <MobileComponent /> : <DesktopPanelControl />;
};

export default function Front() {

  return (
    <ViewportProvider> 
        <Style/>
        <MapContainer />
        <PanelControl/>
    </ViewportProvider>

  );
}