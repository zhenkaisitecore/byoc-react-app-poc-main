import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.tsx';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';

/**
 * Required boilerplate for BYOC clientside bundle.
 *
 * DO NOT REMOVE
 */

//import * as FEAAS from "@sitecore-feaas/clientside/react";
/**
 * Add imports to BYOC components that you would like to be rendered on server below.
 * Clientside components are used for user interactivity.
 */

// Clientside-only component
import "./byoc/ExampleClientsideComponent.tsx";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
