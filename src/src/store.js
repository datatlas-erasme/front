import { createStore, combineReducers, applyMiddleware } from "redux"
import { taskMiddleware } from "react-palm/tasks"
import keplerGlReducer from "kepler.gl/reducers";

const customizedKeplerGlReducer = keplerGlReducer.initialState({
  uiState: {
    // hide side panel when mounted
    activeSidePanel: null,
    // hide all modals when mounted
    currentModal: null
  }
});


const reducers = combineReducers({
    keplerGl: customizedKeplerGlReducer
  });




export default createStore(reducers, {}, applyMiddleware(taskMiddleware))
