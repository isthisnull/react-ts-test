import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Carousel from "./Components/Carousel.tsx";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <Carousel />
  </React.StrictMode>
);
