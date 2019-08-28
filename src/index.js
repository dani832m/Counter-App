import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Counters from "./components/counters";

// Renders the main component called 'Counters' which contains all the children components called 'Counter'
ReactDOM.render(<Counters />, document.getElementById("root"));
