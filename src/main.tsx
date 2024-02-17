import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Carousel from "./Components/Carousel.tsx";
import "./index.css";
import DataUser from "./Components/DataUser.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <Carousel />
    <DataUser />
  </React.StrictMode>
);
