// Copyright (c) 2021 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import React from 'react';
import { useSelector } from 'react-redux';
import { MapPopoverFactory } from 'erasme-kepler.gl/components';

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

    console.log(allFields)
    //TODO map all fields to fieldToshow
    //First is image
    // Second is title => <h1>
    // Rest bold and text

    const PointFields = allFields.map((field, index) => {
      return fieldsToShow.map((fieldToShow, fieldToShowIndex) => {
        if (field.displayName == fieldToShow.name) {
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
          } else if (fieldToShowIndex == 1) {
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

    //TODO Fix because kepler's fields to show panel crashes because of the array input from the dataset

    const PointFieldsFixImage =  allFields.map((field, index) => {
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
      }
    });

    const PointFieldsFix =  allFields.map((field, index) => {
      // TODO check if is url and has image extension

      if (field.displayName.includes('nom')) {
        return (
          <h1>{data[index]}</h1>
        )
      }
      if (field.displayName.includes('desc')) {
        return (
          <p>{data[index]}</p>
        )
      }
      if (field.displayName.includes('adresse')) {
        return (
          <>
            <p>{data[index]}</p>
          </>
        )
      }
      if (field.displayName.includes('public-cible')) {
        return (
          <>
            <p>Public cible :</p>
            <p>{data[index]}</p>
          </>
        )
      }
      if (field.displayName.includes('type_structure')) {
        return (
          <>
            <p>Type structure</p>
            <p>{data[index]}</p>
          </>
        )
      }
      if (field.displayName.includes('activites')) {
        return (
          <>
            <p>Activite</p>
            <p>{data[index]}</p>
          </>
        )
      }
      if (field.displayName.includes('expertise')) {
        return (
          <>
            <p>expertise</p>
            <p>{data[index]}</p>
          </>
        )
      }
      if (field.displayName.includes('publics')) {
        return (
          <>
            <b>publics : </b>{data[index]}
          </>
        )
      }
      if (field.displayName.includes('type_event')) {
        return (
          <>
            <b>type evenement : </b> {data[index]}
          </>
        )
      }
      if (field.displayName.includes('site')) {
        return (
          <a target="" href={data[index]}>Lien site web</a>
        )
      }
  
    });

    return <div className="PointSidePanel">{PointFieldsFixImage}{PointFieldsFix}</div>;
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
