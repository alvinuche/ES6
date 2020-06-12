import React from "react";
import ReactDOM from "react-dom";
// import * as num from "./math";    using this * selects everything, avoid it
import num, { squareNum, cubeNum } from "./math";
// console.log(num);

ReactDOM.render(
  <ul>
    <li>{num}</li>
    <li>{squareNum()}</li>
    <li>{cubeNum()}</li>
  </ul>,
  document.getElementById("root")
);
