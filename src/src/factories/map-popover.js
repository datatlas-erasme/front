import { useSelector } from 'react-redux';
import {
  MapPopoverFactory,
  LayerHoverInfoFactory,
  CoordinateInfoFactory,
  withState,
} from 'erasme-kepler.gl/components';
import { visStateLens } from 'erasme-kepler.gl/reducers';
import CustomMapModal from '../components/modal';
import CustomMapPopover from '../components/popover';
import { PopHover } from '../components/popover/style';
import { WrapperModal } from '../components/modal/style';

const CustomMapPopoverFactory = (...deps) => {
  MapPopoverFactory.deps = [LayerHoverInfoFactory, CoordinateInfoFactory];

  const MapPopoverWrapper = (props) => {
    // Fields declared in the kepler conf panel
    const fieldsToShow = props.layerHoverProp.fieldsToShow;
    // List of all data fields names
    const allFields = props.layerHoverProp.fields;
    // All the data related to the point clicked
    const data = props.layerHoverProp.data;
    const clicked = useSelector((state) => state.keplerGl.map?.visState?.clicked ?? null);

    if (props.layerHoverProp?.layer?.id === 'point_layer') {
      return null;
    }

    if (!clicked) {
      const HoverField = allFields.map((field, index) => {
        return fieldsToShow.map((fieldToShow) => {
          if (field.displayName === fieldToShow.name) {
            return <CustomMapPopover data={data} key={index} props={props} />;
          }
        });
      });

      return <PopHover>{HoverField}</PopHover>;
    }
    // TODO map all fields to fieldToshow
    // First is image
    // Second is title => <h1>
    // Rest bold and text
    const PointFields = allFields.map((field, index) => {
      return fieldsToShow.map((fieldToShow, fieldToShowIndex) => {
        if (field.displayName === fieldToShow.name) {
          // TODO check if is url and has image extension
          if (fieldToShowIndex === 1) {
            return <CustomMapModal data={data} key={index} onClick={props.onClose} />;
          }
        }
      });
    });

    return <WrapperModal>{PointFields}</WrapperModal>;
  };

  return withState(
    // lenses
    [visStateLens],
    // mapStateToProps
    (state) => ({ mapState: state.keplerGl.map1 }),
  )(MapPopoverWrapper);
};

CustomMapPopoverFactory.deps = MapPopoverFactory.deps;

export default CustomMapPopoverFactory;
