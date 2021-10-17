import React, {Component} from 'react';
// Imports custom component styling
import './index.css';


// Imports Kepler.gl

import {connect} from 'react-redux';
import { addDataToMap , updateMap } from "kepler.gl/actions";
import  {PanelHeaderFactory, MapPopoverFactory,injectComponents} from 'kepler.gl/components';

////////////////////////// COMPONENT IMPORT /////////////////////////////////////////
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

import CustomMapPopoverFactory from './factories/map-popover';


// Imports static datasets
//import mediation from './static/datasets/notion_mediation.json';

import useSwr from "swr";

import keplerGlReducer from "kepler.gl/reducers";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { taskMiddleware } from "react-palm/tasks";

const reducers = combineReducers({
    keplerGl: keplerGlReducer
  });
  
  const store = createStore(reducers, {}, applyMiddleware(taskMiddleware));


//Injects new panelHeader Component
// Inject custom components
const KeplerGl = injectComponents([
  [MapPopoverFactory, CustomMapPopoverFactory],
  //[PanelHeaderFactory, replacePanelHeader]

]);


class App extends Component {
    state = {
      showBanner: false,
      width: window.innerWidth,
      height: window.innerHeight,
      layer1: {}
    };

    
  
    componentDidMount() {   
      // Defining page Title
      document.title = "DatAtlas"


      // Fetch Event Notion Data
      fetch('https://back-datatlas.datagora.erasme.org/api/data/notion/notion_mediation/')
      .then(res => res.json())
      .then(
        (data) => {
        console.log(data)
        //this.setState({data: data})
        this.props.dispatch(
          addDataToMap({
            datasets: {
              info: {
                label: "Event",
                id: "3"
              },
              data: data
            },

          }),
        );
      })


        // Fetch Event Notion Data
        fetch('https://back-datatlas.datagora.erasme.org/api/data/notion/notion_tiga/')
        .then(res => res.json())
        .then(
          (data) => {
          console.log(data)
          //this.setState({data: data})
          this.props.dispatch(
            addDataToMap({
              datasets: {
                info: {
                  label: "Event",
                  id: "2"
                },
                data: data
              },
  
            }),
          );
        })


      
      // Fetch Mediation Notion Data
      helpers.formatData(instanceConf.layers[2].url, instanceConf.layers[2].type).then((data) => {
        this.setState({layer1: data})
        //console.log(data)
        this.props.dispatch(
          addDataToMap({
            datasets: {
              info: {
                label: instanceConf.layers[2].name,
                id: "1"
              },
              data: data
            },
            config : mapConfig
          }),
        );
      })


      /*this.props.dispatch(
        addDataToMap({
          datasets: {
            info: {
              label: "Mediation",
              id: "2"
            },
            data: mediation
          },
        }),
      );*/



      /*helpers.formatData(instanceConf.layers.layer2.url, instanceConf.layers.layer2.type).then((data) => {
        //this.setState({layer2: data})
        //console.log(data)
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
      })*/



    // TODO Clean remove the timeout function 
    setTimeout(()=> {this.props.dispatch(updateMap({"latitude": 45.764043,"longitude": 4.835659, "zoom" : 12}))},3000)}
  

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
            <FilterSidePanel/>
            <Crowdsourcing/>
            </div>
        </ThemeProvider>
        
      );
    }
  }

  const mapStateToProps = state => state;
  const dispatchToProps = dispatch => ({dispatch});

  export default connect(mapStateToProps,dispatchToProps)(App);