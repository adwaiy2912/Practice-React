import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
   // strictmode, executes every compo. twice -> useful in finding errors
   <StrictMode>
      <App />
   </StrictMode>
);
