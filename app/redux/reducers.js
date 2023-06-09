/**
 * Combine all reducers in this file and export the combined reducers.
 */
// import { reducer as form } from 'redux-form/immutable';
import { connectRouter } from 'connected-react-router/immutable';
import { combineReducers } from 'redux'
import history from 'utils/history';

import login from './modules/login';

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    // form,
    login,
    // ui: uiReducer,
    // initval,
    // language: languageProviderReducer,
    // router: connectRouter(history),
    ...injectedReducers,
  });

  // Wrap the root reducer and return a new root reducer with router state
  // const mergeWithRouterState = connectRouter(history);
  return rootReducer;
}
