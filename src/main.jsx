// React Libraries
import React from "react";
import ReactDOM from "react-dom/client";

// Custom Styles
import "./index.css";

// Components
import App from "./App.jsx";

// React Router DOM
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
