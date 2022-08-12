import {
  MapPopoverFactory,
  LayerHoverInfoFactory,
  CoordinateInfoFactory,
  withState,
} from 'erasme-kepler.gl/components';
import { visStateLens } from 'erasme-kepler.gl/reducers';
import MapPopoverWrapper from '../components/popover/MapPopoverWrapper';

const CustomMapPopoverFactory = (...deps) => {
  MapPopoverFactory.deps = [LayerHoverInfoFactory, CoordinateInfoFactory];

  return withState(
    // lenses
    [visStateLens],
    // mapStateToProps
    (state) => ({ mapState: state.keplerGl.map1 }),
  )(MapPopoverWrapper);
};

CustomMapPopoverFactory.deps = MapPopoverFactory.deps;

export default CustomMapPopoverFactory;
