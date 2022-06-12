import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//import { useMediaQuery } from 'react-responsive';

const root = ReactDOM.createRoot(document.getElementById("root"));
let pageElements;

//const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

if (window.innerWidth > 798) {
  pageElements = (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  pageElements = (
    <React.StrictMode>
      <p>Ciao</p>
    </React.StrictMode>
  );
}

root.render( pageElements);
