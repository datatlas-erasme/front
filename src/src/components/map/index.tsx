export { default } from './Map';
// import { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
// import { 
//   addDataToMap,
//   updateMap, 
//   addCustomMapStyle, 
//   inputMapStyle 
// } from 'erasme-kepler.gl/actions';
// import { 
//     MapPopoverFactory, 
//     injectComponents, 
// } from 'erasme-kepler.gl/components';
// import CustomMapPopoverFactory from '../../factories/map-popover';

// // Inject the point sidepanel component
// const KeplerGl = injectComponents([
//     [MapPopoverFactory, CustomMapPopoverFactory], 
// ]);

// export default function MapContainer ({instance}) { 

//   const [dataLoaded, setDataLoaded] = useState(false);

//     const dispatch = useDispatch();
//     const dataLayers = instance.datalayers;
//     const instanceConf = instance.conf;
//     const keplerConf = instance.keplerConf;
    
//     useEffect(() => {
//         if (dataLayers) {
//           dataLayers.map((dataset, index) => {
//             dispatch(
//               addDataToMap({
//                 datasets: [
//                   {
//                     info: {
//                       label: dataset[0],
//                       id: dataset[0],
//                     },
//                     data: dataset[1],
//                   },
//                 ],
//               }),
//             );
//           });
//         }
//       }, [dispatch, dataLayers]);

//         // Pass the default kepler styling
//     useEffect(() => {
        
//           dispatch(addDataToMap({ datasets: [], option: { centerMap: true }, 
//           config: keplerConf }));
    
//           // Load à custum map style from backend
//           dispatch(inputMapStyle({style: instanceConf.defaultMapBoxStyleUrl, id:"maquette", name:"Maquette"}))
//           dispatch(addCustomMapStyle())
//       }, [dispatch,keplerConf, instanceConf]);
    
//       // TODO updatemap is not taken into account
//       useEffect(() => {
//           dispatch(updateMap({latitude:0, longitude: 0, zoom: 20}))
//       }, [dispatch]);
  
//       return (
//         dataLoaded ? (
//         <div style={{position: 'absolute', width: '100%', height: '100%'}}>
//            <AutoSizer>
//               {({height, width }) => 
//                 <KeplerGl
//                 id="map"
//                 mapboxApiAccessToken={instanceConf.mapboxToken}
//                 width={width}
//                 height={height}
//                 appName="Datatlas"
//                 />
//               }
//               {/* <Logo /> */}
//           </AutoSizer>
//         </div> ) : ('')
       
//       ) 
// }
