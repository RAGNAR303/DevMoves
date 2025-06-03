/* eslint-disable no-undef */
import ReactDOM from "react-dom/client";

import React from "react";
import Router from "./routes/routes";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/globalStyles";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    <GlobalStyles />
  </React.StrictMode>
);
