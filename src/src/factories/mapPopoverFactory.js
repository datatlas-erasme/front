import { MapPopoverFactory, MapPopover, LayerHoverInfoFactory, CoordinateInfoFactory } from 'erasme-kepler.gl/components';
import {withState} from 'erasme-kepler.gl/components';
import {visStateLens} from 'erasme-kepler.gl/reducers';
import CustomMapPopover from '../components/popover';

const CustomMapPopoverFactory = () => 
withState(
    [visStateLens],
    state => ({...state})
)(CustomMapPopover)

CustomMapPopoverFactory.deps = [LayerHoverInfoFactory, CoordinateInfoFactory];

export function replaceMapPopOver(){
    return [MapPopoverFactory, CustomMapPopoverFactory]
}
   
