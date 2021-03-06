import React from 'react';
import App from './app/App';
import { Provider } from 'react-redux';
import store from './app/store';
import {createRoot} from "react-dom/client";
import "./styles.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);