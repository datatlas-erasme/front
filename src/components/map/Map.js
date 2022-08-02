import React from 'react';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import { MapPopoverFactory, injectComponents } from 'erasme-kepler.gl/components';
import CustomMapPopoverFactory from '../../factories/map-popover';
import IndustriesCustomMapPopoverFactory from '../../factories/industries-mapopover';

const IndustriesKeplerGl = injectComponents([
  [MapPopoverFactory, IndustriesCustomMapPopoverFactory],
]);

// Inject the point sidepanel component
const AlimentaireKeplerGl = injectComponents([[MapPopoverFactory, CustomMapPopoverFactory]]);

export default function MapContainer({ instanceConf }) {
  const theme = instanceConf.theme.name;
  console.log('theme', theme);

  if (theme === 'industries') {
    return (
      <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
        <AutoSizer>
          {({ height, width }) => (
            <IndustriesKeplerGl
              id="map"
              mapboxApiAccessToken={instanceConf.mapboxToken}
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
      <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
        <AutoSizer>
          {({ height, width }) => (
            <AlimentaireKeplerGl
              id="map"
              mapboxApiAccessToken={instanceConf.mapboxToken}
              width={width}
              height={height}
              appName="Datatlas"
            />
          )}
          {/* <Logo /> */}
        </AutoSizer>
      </div>
    );
  }
}
