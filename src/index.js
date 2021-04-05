import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import "./assets/css/bootstrap.css";
import "./assets/css/style.css";
import "./assets/css/main.css";
import "./assets/css/typo-fonts.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorkerRegistration.unregister();
reportWebVitals();
