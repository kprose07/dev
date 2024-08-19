import React from "react";
import ReactDOM from "react-dom/client";
//import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
//pages
import Home from "./pages/home";
import Services from "./pages/services";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="Services" element={<Services />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
