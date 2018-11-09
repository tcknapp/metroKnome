import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
  <div className="jumbotron center">
    <h1>metroKnome</h1>
    <img src= "../images/mknome2.png" alt="knome"/>
  </div>
);

// const Jumbotron = ({ children }) => (
//   <div
//     style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
//     className="jumbotron"
//   >
//     {children}
//   </div>
// );

// export default Jumbotron;

export default Jumbotron;
