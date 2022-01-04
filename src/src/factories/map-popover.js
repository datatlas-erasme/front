import { useSelector } from 'react-redux';
import { MapPopoverFactory } from 'kepler.gl/components';

//import CustomLayerHoverInfo from "./CustomLayerHoverInfo"

const CustomMapPopoverFactory = (...deps) => {
  const MapSidepanel = (props) => {
    const clicked = useSelector((state) => state.keplerGl.map?.visState?.clicked ?? null);
    if (!clicked) {
      const MapPopover = MapPopoverFactory(...deps);

      return <MapPopover {...props} />;
    }
    // Fields declared in the kepler conf panel
    const fieldsToShow = props.layerHoverProp.fieldsToShow;

    // List of all data fields names
    const allFields = props.layerHoverProp.fields;

    // All the data related to the point clicked
    const data = props.layerHoverProp.data;

    //TODO map all fields to fieldToshow
    //First is image
    // Second is title => <h1>
    // Rest bold and text

    const PointFields = allFields.map((field, index) => {
      return fieldsToShow.map((fieldToShow, fieldToShowIndex) => {
        if (field.displayName === fieldToShow.name) {
          // TODO check if is url and has image extension
          if (field.displayName.includes('image')) {
            return (
              <img
                src={
                  data[index]
                    ? data[index]
                    : 'https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                }
              />
            );
          } else if (fieldToShowIndex === 1) {
            return <div>{data[index] && <h1>{data[index]} </h1>}</div>;
          } else {
            //console.log("field name " + field.displayName + " is index :" + index + "Data Value id : " + data[index])
            return (
              <div>
                {data[index] && (
                  <p>
                    <b>{field.displayName} :</b> <p>{data[index]} </p>
                  </p>
                )}
              </div>
            );
          }
        }
      });
    });

    return <div className="PointSidePanel">{PointFields}</div>;
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
