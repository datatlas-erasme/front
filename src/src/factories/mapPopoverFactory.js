// import { MapPopoverFactory, MapPopover, LayerHoverInfoFactory, CoordinateInfoFactory } from 'erasme-kepler.gl/components';
// import {withState} from 'erasme-kepler.gl/components';
// import styled from 'styled-components';
// import {visStateLens} from 'erasme-kepler.gl/reducers';
// import CustomMapPopover from '../components/popover';

// CustomMapPopoverFactory.deps = MapPopover.deps;

// console.log(CustomMapPopoverFactory.deps);

// function CustomMapPopoverFactory(...deps) {
//     const MapPopover = MapPopoverFactory(...deps);
//     const StyledPopoverOverlay = styled.div`
//     position: absolute;
//     top: ${props => props.top}px;
//     right: 0;
//     z-index: 1;
//   `;

// }

// = () => 
// withState(
//     [visStateLens],
//     state => ({...state})
// )(CustomMapPopover)

// CustomMapPopoverFactory.deps = [LayerHoverInfoFactory, CoordinateInfoFactory];

// export function replaceMapPopOver(){
//     return [MapPopoverFactory, CustomMapPopoverFactory]
// }
   
