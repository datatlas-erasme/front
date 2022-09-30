import { useSelector } from 'react-redux';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import { MapPopoverFactory, injectComponents } from 'erasme-kepler.gl/components';
import CustomMapPopoverFactory from '../../factories/map-popover';
import IndustriesCustomMapPopoverFactory from '../../factories/industries-mapopover';
import { getMapboxToken, getThemeName } from '../../store/app';
import Header from '../header/Header';

const IndustriesKeplerGl = injectComponents([
  [MapPopoverFactory, IndustriesCustomMapPopoverFactory],
]);

// Inject the point sidepanel component
const AlimentaireKeplerGl = injectComponents([[MapPopoverFactory, CustomMapPopoverFactory]]);
export default function MapContainer() {
  const mapboxToken = useSelector(getMapboxToken);
  const themeName = useSelector(getThemeName);

  if (themeName === 'industries') {
    return (
      <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
        <AutoSizer>
          {({ height, width }) => (
            <IndustriesKeplerGl
              id="map"
              mapboxApiAccessToken={mapboxToken}
              width={width}
              height={height}
              appName="Datatlas"
            />
          )}
          {/* <Logo /> */}
        </AutoSizer>
      </div>
    );
  } else {
    return (
      <>
        <Header />
        <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
          <AutoSizer>
            {({ height, width }) => (
              <AlimentaireKeplerGl
                id="map"
                mapboxApiAccessToken={mapboxToken}
                width={width}
                height={height}
                appName="Datatlas"
              />
            )}
          </AutoSizer>
        </div>
      </>
    );
  }
}
