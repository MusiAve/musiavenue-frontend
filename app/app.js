/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import '@babel/polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';
import history from 'utils/history';
import 'sanitize.css/sanitize.css';
// Import root app
import App from 'containers/App';
// import './styles/layout/base.scss';

// Import Language Provider
import LanguageProvider from 'containers/LanguageProvider';

// Load the favicon and the .htaccess file
// Load the favicon and the .htaccess file
/* eslint-disable import/no-unresolved, import/extensions */
import '!file-loader?name=[name].[ext]!../public/favicons/favicon.ico'; // eslint-disable-line
import 'file-loader?name=.htaccess!./.htaccess'; // eslint-disable-line
/* eslint-enable import/no-unresolved, import/extensions */

import configureStore from './redux/configureStore';

// Import i18n messages
import { translationMessages } from './i18n';
import Store from './redux/configureStore';
import { SnackbarProvider } from 'notistack';
import { ThemeProvider } from '@mui/material';
import Theme from 'theme/Theme';

const MOUNT_NODE = document.getElementById('app');

const root = ReactDOM.createRoot(MOUNT_NODE);

const render = messages => {
  root.render(
    <Provider store={Store}>
      <ThemeProvider theme={Theme}>
        <LanguageProvider messages={messages}>
          <ConnectedRouter history={history}>
            <SnackbarProvider preventDuplicate maxSnack={5}>
              <App />
            </SnackbarProvider>
          </ConnectedRouter>
        </LanguageProvider>
      </ThemeProvider>
    </Provider>
  );
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./i18n', 'containers/App'], () => {
    // root.unmount(MOUNT_NODE);
    render(translationMessages);
  });
}

// Chunked polyfill for browsers without Intl support
if (!window.Intl) {
  new Promise(resolve => {
    resolve(import('intl'));
  })
    .then(() => Promise.all([import('intl/locale-data/jsonp/en.js')]))
    .then(() => render(translationMessages))
    .catch(err => {
      throw err;
    });
} else {
  render(translationMessages);
}

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
//  if (process.env.NODE_ENV === 'production') {
//    require('offline-plugin/runtime').install(); // eslint-disable-line global-require
//  }
