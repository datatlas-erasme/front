 import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { MapPopoverFactory } from 'erasme-kepler.gl/components';
import { datalimentaire } from '../utils/styles';
import AddButton from '../components/buttons/interactiv-button/index'
// import PopOver from '../components/popover';

// import CustomLayerHoverInfo from "./CustomLayerHoverInfo"

const PointModal = styled.div`
      position: fixed;
      top: 180px;
      width: 50%;
      height: auto;
      left: 40%;
      background: white;
      padding: 20px;
      
      border: 1px solid ${datalimentaire.colors.midgray};
      border-radius: ${datalimentaire.radii[5]};
      box-shadow: 0px 2px 18px -1px rgba(0, 0, 0, 0.25);


`

const CustomMapPopoverFactory = (...deps) => {
  console.log(deps);
  const MapSidepanel = (props) => {
    const clicked = useSelector((state) => state.keplerGl.map?.visState?.clicked ?? null);
    if (!clicked) {
      const MapPopover = MapPopoverFactory(...deps);
      console.log(clicked);

      return <MapPopover {...props}/>;
    }
    // Fields declared in the kepler conf panel
    const fieldsToShow = props.layerHoverProp.fieldsToShow;
    // console.log(fieldsToShow);

    // List of all data fields names
    const allFields = props.layerHoverProp.fields;
    // console.log(allFields);

    // All the data related to the point clicked
    const data = props.layerHoverProp.data;
    // console.log(data[2]);

    // TODO map all fields to fieldToshow
    // First is image
    // Second is title => <h1>
    // Rest bold and text

    const PointFields = allFields.map((field, index) => {
      return fieldsToShow.map((fieldToShow, fieldToShowIndex) => {
        console.log(data);
        // console.log(field);
        if (field.displayName === fieldToShow.name) {
          // TODO check if is url and has image extension
          // console.log(fieldToShow);
          if (field.displayName.includes('image')) {
            return (
              <img
                alt={'pexels-photo'}
                src={
                  data[index]
                    ? data[index]
                    : 'https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                }
              />
            );
          } else if (fieldToShowIndex  === 1 ) {
            return (
            <div key={index}>
                <div>
                  { data[index] && <h2>{data[2]}</h2> }
                  <p>{data[6]} </p>
                  <AddButton href={data[14]}/>
                  <p>{data[3]} {data[4]} {data[5]}</p>
                  <p>{data[9]} </p>   
                  <p>{data[13]} </p>
                </div>

                <div>
                <p>{data[10]} </p>
                </div>

              </div>
            );
          } else {
            // console.log("field name " + field.displayName + " is index :" + index + "Data Value id : " + data[index])
            return (
              <div>
              
              </div>

            );
          }
        }
      });
    });

    return <PointModal className="PointSidePanel">{PointFields}</PointModal>;
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

// export function replacePopOver(){
//   return [MapPopoverFactory, CustomMapPopoverFactory]
// }