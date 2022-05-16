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
import he from 'he'
import DOMPurify from 'dompurify';
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

    //console.log(allFields)
    //TODO map all fields to fieldToshow
    //First is image
    // Second is title => <h1>
    // Rest bold and text

    const PointFields = allFields.map((field, index) => {
      return fieldsToShow.map((fieldToShow, fieldToShowIndex) => {
        if (field.displayName == fieldToShow.name) {
          // TODO check if is url and has image extension
          if (field.displayName.includes('img')) {
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

    const ContentBuffer = []

    const PointFieldsFixImage =  allFields.map((field, index) => {
      if (field.displayName.includes('img')) {
        console.log(data[index])
        ContentBuffer.push({cat: "img", content: data[index]})

      }
    });

    const PointFieldsFix =  allFields.map((field, index) => {
      // TODO check if is url and has image extension
      if (field.displayName.includes('title')) {
        ContentBuffer.push({cat: "title", content: data[index]})
        //ContentBuffer.push({cat: "Nom-structure", content: " <h1>"+ data[index]+ "</h1>"})
      }
      if (field.displayName.includes('description')) {
        ContentBuffer.push({cat: "description", content: data[index]})
        //ContentBuffer.push({cat: "Description", content:  "<p className='desc'>"+ data[index] + "</p>"})

      }
      if (field.displayName.includes('adress')) {
        ContentBuffer.push({cat: "adress", content:data[index]})
        //ContentBuffer.push({cat: "Adresse", content: " <p><b>Adresse :</b>"+data[index] +"</p>"})
      }

      if (field.displayName.includes('tags')) {
        ContentBuffer.push({cat: "tags", content:data[index]+" "})
        //ContentBuffer.push({cat: "types-structure", content: "<p><b>Type de structure :</b> " + data[index] + "</p>"})
      }
      if (field.displayName.includes('activites')) {
        ContentBuffer.push({cat: "activites", content:data[index]})
        //ContentBuffer.push({cat: "activites", content: " <p><b>Activités : </b> " + data[index]+"</p>"})
      }
      if (field.displayName.includes('contact')) {
        ContentBuffer.push({cat: "contact", content: data[index]})
        //ContentBuffer.push({cat: "Domaines-expertise", content: " <p><b>Expertise :</b> "+data[index]+"</p>"})
      }
      if (field.displayName.includes('link')) {
        ContentBuffer.push({cat: "link", content: data[index]})
        //ContentBuffer.push({cat: "Publics-cibles", content: " <p><b>Publics :</b> "+data[index]+"</p>"}
      }
      if (field.displayName.includes('trees')) {
        ContentBuffer.push({cat: "trees", content: data[index]})
        //ContentBuffer.push({cat: "type_event", content: "<p><b>Type Event :</b> "+data[index]+"</p>"})
      }
      if (field.displayName.includes('Site-web')) {
        ContentBuffer.push({cat: "Site-web", content: data[index]})
        //ContentBuffer.push({cat: "site", content: '<a target="" href='+data[index]+'>Voir le site web</a>'})
      }
  
    });

    const title = ContentBuffer.filter((value) => value.cat === "title" )[0]?.content
    const image = ContentBuffer.filter((value) => value.cat === "img" )[0]?.content
    const desc = ContentBuffer.filter((value) => value.cat === "description" )[0]?.content
    const adresse = ContentBuffer.filter((value) => value.cat === "adress" )[0]?.content
    const tags = ContentBuffer.filter((value) => value.cat === "tags" )[0]?.content
    const activites = ContentBuffer.filter((value) => value.cat === "activites" )[0]?.content
    const contact = ContentBuffer.filter((value) => value.cat === "contact" )[0]?.content
    const link = ContentBuffer.filter((value) => value.cat === "link" )[0]?.content
    const trees = ContentBuffer.filter((value) => value.cat === "trees" )[0]?.content
    const url = ContentBuffer.filter((value) => value.cat === "Site-web" )[0]?.content

    const imgageUrl =  image ? image : 'https://canographia.datagora.erasme.org/wp-content/themes/canographia/assets/placeholder-ressource.png'
    const style = {
      backgroundImage: `url(${imgageUrl})` 
    }

    return (
      <div className="PointSidePanel">
         <div className='img-container' style={style}></div>
        <div className='content'>
          <h1>{he.decode(title)}</h1>
          <a target="_blank" href={url}>{url ? "Voir le site web" : ""}</a>
          <p><b>{adresse ? "Adresse : " : ""}</b>{adresse}</p>
          <p><b>{trees ? "Arbres plantés : " : ""}</b>{trees}</p>
          <p><b>{tags ? "Tags : " : ""}</b>{tags}</p>
          <p><b>{contact ? "Contact : " : ""}</b>{DOMPurify.sanitize(he.decode(contact),{FORBID_TAGS: ['a']})}</p>   
          <p><b>{link ? <a href={link} target="_blank">Lien vers la fiche projet</a> : ""}</b></p>   
        </div>
      </div>
    )

    //return <div className="PointSidePanel">{PointFieldsFixImage}<div className='content'>{PointFieldsFix}</div></div>;
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
