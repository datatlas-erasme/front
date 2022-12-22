import { useSelector } from 'react-redux';
import {
  MapPopoverFactory,
  LayerHoverInfoFactory,
  CoordinateInfoFactory,
  withState,
} from 'erasme-kepler.gl/components';
import { visStateLens } from 'erasme-kepler.gl/reducers';
import { MapModalLocal, MapModalGobal } from '../components/modal';
import CustomMapPopover from '../components/popover';
import { PopHover } from '../components/popover/style';
import { WrapperModal } from '../components/modal/style';
import { getClicked, getMapById } from '../store/kepler/selectors';

const CustomMapPopoverFactory = (...deps) => {
  MapPopoverFactory.deps = [LayerHoverInfoFactory, CoordinateInfoFactory];

  const MapPopoverWrapper = (props) => {
    // Fields declared in the kepler conf panel
    const fieldsToShow = props.layerHoverProp.fieldsToShow;

    // List of all data fields names
    const allFields = props.layerHoverProp.fields;

    // All the data related to the point clicked
    const data = props.layerHoverProp.data;

    const dataID = props.layerHoverProp.layer._oldDataUpdateTriggers.getData.datasetId;

    const clicked = useSelector(getClicked);

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
            return dataID === 'Manger Local' ? (
              <MapModalLocal data={data} key={index} onClick={props.onClose} dataID={dataID} />
            ) : (
              <MapModalGobal data={data} key={index} onClick={props.onClose} dataID={dataID} />
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
