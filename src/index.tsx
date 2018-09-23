import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'typeface-roboto'
import configureStore from './configureStore';

import { Provider } from 'react-redux'
import { ApplicationState } from './Store';

const appSate = new ApplicationState();
const store = configureStore(appSate);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
