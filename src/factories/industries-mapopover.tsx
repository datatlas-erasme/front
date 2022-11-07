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

//import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { MapPopoverFactory } from 'erasme-kepler.gl/components';
import { getConfigLayers } from '../store/app';
import { getClicked, getLayers } from '../store/keplerGl';
//import CustomLayerHoverInfo from "./CustomLayerHoverInfo"

const IndustriesCustomMapPopoverFactory = (...deps) => {
  const MapSidepanel = (props) => {
    // Fields declared in the kepler conf panel
    const fieldsToShow = props.layerHoverProp.fieldsToShow;

    // List of all data fields names
    const allFields = props.layerHoverProp.fields;

    const dataID = props.layerHoverProp.layer._oldDataUpdateTriggers.getData.datasetId;
    console.log('dataID', dataID);

    // All the data related to the point clicked
    const data = props.layerHoverProp.data;

    const configLayers = useSelector(getConfigLayers);
    const layers = useSelector(getLayers);
    // get the sidePanelConfig from the configLqyers array
    /**useEffect(() => {
      configLayers.forEach((configLayer) => {
        console.log(configLayer.sidePanelMapping);
      });
    }, [configLayers]);**/

    // get the clicked point from the store
    const clicked = useSelector(getClicked);
    // if clicked is not null display the sidepanel
    if (!clicked) {
      const MapPopover = MapPopoverFactory(...deps);

      return <MapPopover {...props} />;
    }

    const PointFields = allFields.map((field, index) => {
      // Return all data[index] in divs with the field name as key
      //console.log('field', field);
      //console.log('data', data[index]);
      //console.log('configLayers', configLayers);

      // foreach field in the configLayers check if the name is the same as the dataId variable
      const currentConfigLayer = configLayers.find((configLayer) => configLayer.name === dataID);
      console.log('currentConfigLayer', currentConfigLayer.sidePanelMapping);
      const buffer = Array<{ name: string; value: string; type: string }>();
      currentConfigLayer.sidePanelMapping.forEach((mapping) => {
        if (mapping.key === field.name) {
          console.log('field name', field.name);
          console.log('field type', field.type);
          console.log('Data', data[index]);
          // append object to buffer
          buffer.push({ name: field.name, value: data[index], type: field.type });
        }
      });

      console.log('buffer', buffer);

      return buffer.map((item) => {
        return (
          <div key={item.name}>
            <div>{}</div>
            <span>{item.name}</span>
            <span>{item.value}</span>
          </div>
        );
      });
    });

    return (
      <div>
        <h1>Custom Sidepanel</h1>
        {PointFields}
      </div>
    );
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

IndustriesCustomMapPopoverFactory.deps = MapPopoverFactory.deps;
export default IndustriesCustomMapPopoverFactory;
