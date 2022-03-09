import { useSelector } from 'react-redux';
import { MapPopoverFactory } from 'erasme-kepler.gl/components';
import {withState} from 'erasme-kepler.gl/components';
import {visStateLens} from 'erasme-kepler.gl/reducers';
import CustomMapModal from '../components/modal/index';
import CustomMapPopover from '../components/popover/index'
import { PopHover } from '../components/popover/style';
import { WrapperModal } from '../components/modal/style'

// import PopOver from '../components/popover';

// import CustomLayerHoverInfo from "./CustomLayerHoverInfo"

const CustomMapPopoverFactory = (...deps) => {
  
  const MapPopover = MapPopoverFactory(...deps);

  const MapPopoverWrapper = props => {
    
    // Fields declared in the kepler conf panel
    const fieldsToShow = props.layerHoverProp.fieldsToShow;
    // List of all data fields names
    const allFields = props.layerHoverProp.fields;
    // All the data related to the point clicked
    const data = props.layerHoverProp.data;
    console.log(data);
    const layer = props.layerHoverProp.layer
    console.log(layer);

    const clicked = useSelector((state) => state.keplerGl.map?.visState?.clicked ?? null);
    //position de la souris 
    
    if (!clicked) {
      const HoverField = allFields.map((field, index) => {
        return fieldsToShow.map((fieldToShow, fieldToShowIndex) => {

          if (field.displayName === fieldToShow.name) {
            // TODO check if is url and has image extension

            if (fieldToShowIndex  === 1 ) {
              return (
                 <MapPopover data={data} key={index}/>
              );
            }
          }
        });
      });

      return <PopHover>{HoverField}</PopHover>;
    };

    // TODO map all fields to fieldToshow
    // First is image
    // Second is title => <h1>
    // Rest bold and text

    const PointFields = allFields.map((field, index) => {
      return fieldsToShow.map((fieldToShow, fieldToShowIndex) => {
        if (field.displayName === fieldToShow.name) {
          // TODO check if is url and has image extension
          if (fieldToShowIndex  === 1 ) {
            return (
               <CustomMapModal data={data}/>
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
    state => ({mapState: state.keplerGl.map1}),

  )(MapPopoverWrapper);
};

CustomMapPopoverFactory.deps = MapPopoverFactory.deps;

export default CustomMapPopoverFactory;