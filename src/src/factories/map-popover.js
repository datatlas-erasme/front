 import { useSelector } from 'react-redux';
import { MapPopoverFactory } from 'erasme-kepler.gl/components';
import {withState} from 'erasme-kepler.gl/components';
import {visStateLens} from 'erasme-kepler.gl/reducers';
import {FarmerIcon} from '../assets/svg/FarmerIcon';
import { PointAdress } from '../assets/svg/PointAdress';
import {
  PopHover,
  ModalColLeft,
  ModalColRight,
  ModalHeading,
  WrapperModal
} from '../factories/style'

// import PopOver from '../components/popover';

// import CustomLayerHoverInfo from "./CustomLayerHoverInfo"

const CustomMapPopoverFactory = (...deps) => {
  
  // const MapPopover = MapPopoverFactory(...deps);
  const MapSidepanel = props => {
        // Fields declared in the kepler conf panel
        const fieldsToShow = props.layerHoverProp.fieldsToShow;
        // console.log(fieldsToShow);
    
        // List of all data fields names
        const allFields = props.layerHoverProp.fields;
        // console.log(allFields);
        // All the data related to the point clicked
        const data = props.layerHoverProp.data;
        console.log(data);
    const clicked = useSelector((state) => state.keplerGl.map?.visState?.clicked ?? null);
    if (!clicked) {
      const HoverField = allFields.map((field, index) => {
        return fieldsToShow.map((fieldToShow, fieldToShowIndex) => {
          // console.log(data);
          // console.log(field);
          if (field.displayName === fieldToShow.name) {
            // TODO check if is url and has image extension
            // console.log(fieldToShow);
            if (fieldToShowIndex  === 1 ) {
              return (
              <>
                  <p>{data[10]} </p>
                    { data[index] && <h2>{data[2]}</h2> }
                    <p>Horaires :</p>
                    <p>{data[9]} </p>     
                </>
              );
            }
          }
        });
      });
  
      return <PopHover className="PointSidePanel">{HoverField}</PopHover>;
    };
    
    //   const MapPopoverWrapper = props => {
    //     console.log(props);

    //   return <MapPopover {...props}/>;
    // }

    // TODO map all fields to fieldToshow
    // First is image
    // Second is title => <h1>
    // Rest bold and text

    const PointFields = allFields.map((field, index) => {
      return fieldsToShow.map((fieldToShow, fieldToShowIndex) => {
        // console.log(data);
        // console.log(field);
        if (field.displayName === fieldToShow.name) {
          // TODO check if is url and has image extension
          // console.log(fieldToShow);
         if (fieldToShowIndex  === 1 ) {
            return (
            <>
              <ModalColLeft>
                <ModalHeading>
                  <span><FarmerIcon/></span>
                  <div>
                  { data[index] && <h2>{data[2]}</h2> }
                  <p>{data[6]} </p>
                  </div>
                </ModalHeading>
                <p>Informations complémentaires liées à la spécificité de ce lieu.</p>
                  <a href={data[14]} target={'_blank'} rel={'noreferrer'}><button >En savoir plus</button></a>
                <ul>
                  <li>
                    <address>{data[3]} {data[4]} {data[5]}</address>
                  </li>
                  <li>
                    {data[9]}
                  </li>
                  <li>
                    <a href={'https://form.typeform.com/to/V1f3GNXR'} target='_blank' rel={'noreferrer'}>Modifier les informations</a>
                  </li>
                </ul>
              </ModalColLeft>

              <ModalColRight>
                <img
                alt={'Unsplash'}
                src={'https://images.unsplash.com/photo-1543083477-4f785aeafaa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'}
                />
                <p>{data[10]} </p>
              </ModalColRight>
            </>
            );
          }
        }
      });
    });

    return <WrapperModal className="PointSidePanel">{PointFields}</WrapperModal>;
  };

  return MapSidepanel;
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
}

CustomMapPopoverFactory.deps = MapPopoverFactory.deps;

export default CustomMapPopoverFactory;