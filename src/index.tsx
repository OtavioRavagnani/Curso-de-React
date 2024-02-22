import React from "react";
import ReactDOM from "react-dom";

import { App } from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-confirm-alert/src/react-confirm-alert.css";

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer
      position="top-center"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      bodyStyle={{ fontSize: "14px" }}
    />
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);
