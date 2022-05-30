import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './redux/config'
import { Provider } from 'react-redux'
import {persistStore} from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import { BrowserRouter as Router } from "react-router-dom";
import './index.css';

let persistor = persistStore(store)

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <App />
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  rootElement
);
