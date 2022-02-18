 import { useSelector } from 'react-redux';
import { MapPopoverFactory } from 'erasme-kepler.gl/components';
import {withState} from 'erasme-kepler.gl/components';
import {visStateLens} from 'erasme-kepler.gl/reducers';
import CustomMapModal from '../components/modal/index';
import CustomMapPopover from '../components/popover/index'
import {
  PopHover,
  ModalColLeft,
  ModalColRight,
  ModalHeading,
  WrapperModal
} from '../components/popover/style'

// import PopOver from '../components/popover';

// import CustomLayerHoverInfo from "./CustomLayerHoverInfo"

const CustomMapPopoverFactory = (...deps) => {
  
  // const MapPopover = MapPopoverFactory(...deps);
  const MapSidepanel = props => {

    // Fields declared in the kepler conf panel
    const fieldsToShow = props.layerHoverProp.fieldsToShow;
    // List of all data fields names
    const allFields = props.layerHoverProp.fields;
    // All the data related to the point clicked
    const data = props.layerHoverProp.data;
    // console.log(data);

    const clicked = useSelector((state) => state.keplerGl.map?.visState?.clicked ?? null);

    if (!clicked) {
      const HoverField = allFields.map((field, index) => {
        return fieldsToShow.map((fieldToShow, fieldToShowIndex) => {

          if (field.displayName === fieldToShow.name) {
            // TODO check if is url and has image extension

            if (fieldToShowIndex  === 1 ) {
              return (
                 <CustomMapPopover data={data} key={index}/>
              );
            }
          }
        });
      });

      return <PopHover className="PointSidePanel">{HoverField}</PopHover>;
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

    return <WrapperModal className="PointSidePanel">{PointFields}</WrapperModal>;
  };

  return withState(
    // lenses
    [visStateLens],
    // mapStateToProps
    state => ({mapState: state.keplerGl.map1}),

  )(MapSidepanel);
};

function isURL(str) {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i',
  ); // fragment locator

  return !!pattern.test(str);
  console.log(pattern);

}

CustomMapPopoverFactory.deps = MapPopoverFactory.deps;

export default CustomMapPopoverFactory;