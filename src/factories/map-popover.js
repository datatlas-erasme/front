import { useSelector } from 'react-redux';
import {
  MapPopoverFactory,
  LayerHoverInfoFactory,
  CoordinateInfoFactory,
  withState,
} from 'kepler.gl/components';
import { visStateLens } from 'kepler.gl/reducers';
import CustomMapModal from '../components/modal/Modal';
import CustomMapPopover from '../components/popover';
import { PopHover } from '../components/popover/style';
import { WrapperModal } from '../components/modal/alimentaire-modal/style';
import { getClicked, getMapById } from '../store/keplerGl';

const CustomMapPopoverFactory = () => {
  MapPopoverFactory.deps = [LayerHoverInfoFactory, CoordinateInfoFactory];
  const MapPopoverWrapper = (props) => {
    const clicked = useSelector(getClicked);
    // Fields declared in the kepler conf panel
    const fieldsToShow = props.layerHoverProp.fieldsToShow;

    // List of all data fields names
    const allFields = props.layerHoverProp.fields;

    // All the data related to the point clicked
    const data = props.layerHoverProp.data.values();

    const dataID = props.layerHoverProp.layer._oldDataUpdateTriggers.getData.datasetId;

    if (props.layerHoverProp?.layer?.id === 'point_layer') {
      return null;
    }
    if (!clicked) {
      const HoverField = allFields.map((field, index) => {
        return fieldsToShow.map((fieldToShow) => {
          if (field.displayName === fieldToShow.name) {
            return <CustomMapPopover data={data} key={index} props={props} dataID={dataID} />;
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
            return (
              <CustomMapModal
                data={data}
                key={index}
                onClick={props.onClose}
                dataID={dataID}
                props={props}
              />
            );
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
    (state) => ({ mapState: getMapById('map1')(state) }),
  )(MapPopoverWrapper);
};

CustomMapPopoverFactory.deps = MapPopoverFactory.deps;

export default CustomMapPopoverFactory;
