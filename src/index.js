
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

//module.exports = require('./lib/axios');

import { GoogleOAuthProvider } from "@react-oauth/google";
// import { Provider } from "react-redux";
// import store from "./components/Redux/store";
// import Counter from "./components/Redux/GlobalState";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId="131829855050-i6i0nlsiouv2n259vkc8v6tipr7lbb6e.apps.googleusercontent.com">

      <App />
      {/* <Counter /> */}


  </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
