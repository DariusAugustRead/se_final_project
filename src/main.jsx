import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as BrowserRouter } from "react-router-dom";

import App from "./components/App/App.jsx";
import SideImage from "./components/SideImages/SideImages.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SideImage side="left" />
      <App />
      <SideImage side="right" />
    </BrowserRouter>
  </React.StrictMode>
);
