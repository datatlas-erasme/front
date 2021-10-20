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
import {MapPopoverFactory} from 'kepler.gl/components';

//import CustomLayerHoverInfo from "./CustomLayerHoverInfo"




const CustomMapPopoverFactory = (...deps) => {
  const MapSidepanel = props => {
    //console.log('deps', deps)
    //console.log('props', props)
   /* console.log(props.layerHoverProp.layer.config.dataId)
    console.log(props.layerHoverProp)*/

    //console.log(props.layerHoverProp)

    /*if (props.layerHoverProp.data[15] == Object) {

    }*/
    //console.log(props.layerHoverProp)
    //console.log(props.layerHoverProp.data[13])

    if(props.layerHoverProp.layer.config.dataId == 2) {
      return  (
        <div className="PointSidePanel">
        <img src={props.layerHoverProp.data[15] ? props.layerHoverProp.data[15] : "https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}/>
        <h1>{props.layerHoverProp.data[3]}</h1>

        <div className="text-container">
            <p>{props.layerHoverProp.data[4]}</p>
        </div>

        <div className="cat-container">
          <h2>Catégories</h2>
            <p>Adresse : {props.layerHoverProp.data[6]}</p>
            <p>Url : <a href={props.layerHoverProp.data[5]}>{props.layerHoverProp.data[5]}</a></p>
            <p>Mail : {props.layerHoverProp.data[7]}</p>
            <p>Tel : {props.layerHoverProp.data[8]}</p>
            <p>Réseaux Sociaux : {props.layerHoverProp.data[9]}</p>


        </div>




      </div>
        )
    }
    //TODO REMOVE - DIsplays Event Sidepanel
    else if(props.layerHoverProp.layer.config.dataId == 3) {
      return  (
        <div className="PointSidePanel">
        <img src={props.layerHoverProp.data[13] ? props.layerHoverProp.data[13] : "https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}/>
        <h1>{props.layerHoverProp.data[3]}</h1>

        <div className="text-container">
            <p>{props.layerHoverProp.data[4]}</p>
        </div>

        <div className="cat-container">
          <h2>Catégories</h2>
            <p>Adresse : {props.layerHoverProp.data[6]}</p>
            <p>Url : <a href={props.layerHoverProp.data[5]}>{props.layerHoverProp.data[5]}</a></p>
            <p>Mail : {props.layerHoverProp.data[7]}</p>
            <p>Tel : {props.layerHoverProp.data[8]}</p>

        </div>




      </div>
        )
    }

    else {
      const MapPopover = MapPopoverFactory(...deps);
      return <MapPopover {...props} />;
    }




  }
  return MapSidepanel;
  
};
CustomMapPopoverFactory.deps = MapPopoverFactory.deps;
export default CustomMapPopoverFactory;
