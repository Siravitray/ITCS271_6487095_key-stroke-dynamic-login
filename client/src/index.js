// Importing necessary modules
import React from "react"; // Module for building user interfaces
import ReactDOM from "react-dom"; // Module for rendering React components
import App from "./App"; // Importing App component from App.js file

import reportWebVitals from "./reportWebVitals";  // Module for reporting web vitals to a third-party service

// Rendering the App component to the DOM
ReactDOM.render(
  <>
  <App />
  </>,  
  // Selecting the root DOM element to render the App component into
  document.getElementById('root')
);

// Calling the function to report web vitals.
reportWebVitals();