import React, {Component} from 'react';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
// Imports custom component styling
import './index.css';


// Imports Kepler.gl
import keplerGlReducer from "kepler.gl/reducers";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { taskMiddleware } from "react-palm/tasks";
import { Provider, useDispatch } from "react-redux";
import {connect} from 'react-redux';
import KeplerGlSchema from 'kepler.gl/schemas';
import { addDataToMap , updateMap,mapStyleChange, setFilter, removeFilter } from "kepler.gl/actions";
import {EDITOR_MODES} from 'kepler.gl/constants';

import useSwr from "swr";

////////////////////////// COMPONENT IMPORT /////////////////////////////////////////
import Filters from './components/Filters';
import Crowdsourcing from './components/Crowdsourcing';
import Logo from './components/Logo'
import FilterSidePanel from './components/FilterSidePanel'
////////////////////////// HELPERS IMPORT /////////////////////////////////////////
import helpers from "./helpers/main";


////////////////////////// CONFIG FILES IMPORT ////////////////////////////////////
import mapConfig from './static/defaultDisplayConf.json';
import customTheme from './static/themeConf.json';
import instanceConf from './static/instanceConf.json';

////////////////////////// COMPONENT INJECTION ////////////////////////////////////
// Imports ThemeProvider who helps to change the css styling of the components
import {ThemeProvider} from 'styled-components';

// Injects new items into the panel Header
import {replacePanelHeader} from './factories/panel-header';


// Imports static datasets
import population from './static/datasets/population.json';




//Injects new panelHeader Component
const KeplerGl = require('kepler.gl/components').injectComponents([
  replacePanelHeader()
]);

//const layer1 = helpers.formatData(instanceConf.layers.layer1.url, instanceConf.layers.layer1.type)

/*const { layer1 } = useSwr("layer1", async () => {
  const layer1 = await helpers.formatData(instanceConf.layers.layer1.url, instanceConf.layers.layer1.type)
});*/

/*const addData= () => {
  const data = {latitude: 37.75043, longitude: -122.34679, width: 800, height: 1200}; 
  dispatch(updateMap(data));
 };
*/



class App extends Component {
    state = {
      showBanner: false,
      width: window.innerWidth,
      height: window.innerHeight,
      layer1: {}
    };


  
    componentDidMount() {   
      helpers.formatData(instanceConf.layers.layer1.url, instanceConf.layers.layer1.type).then((data) => {
        this.setState({layer1: data})
        console.log(data)
        this.props.dispatch(
          addDataToMap({
            datasets: {
              info: {
                label: instanceConf.layers.layer1.name,
                id: "1"
              },
              data: data
            },

          }),
        );
      })


      helpers.formatData(instanceConf.layers.layer2.url, instanceConf.layers.layer2.type).then((data) => {
        //this.setState({layer2: data})
        console.log(data)
        this.props.dispatch(
          addDataToMap({
            datasets: {
              info: {
                label: instanceConf.layers.layer2.name,
                id: "2"
              },
              data: data
            },
            config : mapConfig
          }),
        );
      })



      this.props.dispatch(
        //showDatasetTable("1"),
        //toggleSidePanel("filter"),
        mapStyleChange("satellite"),
        
        //removeLayer(0)
        //setFilter(0,"activites", "{\"Accompagnement à l'innovation\"}")
        //removeFilter(0)
      )
    }
  

    render() {
      return (
        <ThemeProvider theme={customTheme}>
            <div
              style={{
                transition: 'margin 1s, height 1s',
                position: 'absolute',
                width: '100%',
                height: '100%',
                left: 0,
                top: 0
              }}
            >
            <KeplerGl
              mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API}
              id="map"
              /*
                * Specify path to keplerGl state, because it is not mount at the root
                */
              //getState={keplerGlGetState}
              width={window.innerWidth}
              height={window.innerHeight}
            />
            <Logo/>
            <Filters/>
            <Crowdsourcing/>
            </div>
        </ThemeProvider>
        
      );
    }
  }

  const mapStateToProps = state => state;
  const dispatchToProps = dispatch => ({dispatch});

  export default connect(mapStateToProps,dispatchToProps)(App);