// /**
//  * First we will load all of this project's JavaScript dependencies which
//  * includes React and other helpers. It's a great starting point while
//  * building robust, powerful web applications using React + Laravel.
//  */

// require('./bootstrap');

// /**
//  * Next, we will create a fresh React caseSensitive={false} element instance and attach it to
//  * the page. Then, you may begin adding components to this application
//  * or customize the JavaScript scaffolding to fit your unique needs.
//  */

// //require('./components/Example');
// //require('./components/Main');
// require('./components/Menu');
// //require('./components/Prueba');
import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./components/Menu";
// import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("main"));
root.render(
  <React.StrictMode>
    <App root={root} />
  </React.StrictMode>
);

// reportWebVitals();
