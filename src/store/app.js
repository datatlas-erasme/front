import { createAction, handleActions } from 'redux-actions';

// CONSTANTS
export const INIT = 'INIT';

// ACTIONS
export const appInit = createAction(INIT);

// INITIAL_STATE
const initialState = {
  appName: 'Opendata alimentaire',
  loaded: false,
};

// REDUCER
const app = handleActions(
  {
    [INIT]: (state) => ({
      ...state,
      loaded: true,
    }),
  },
  initialState,
);

export default app;
