import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";
import animals from "./data";

// const [cats, dogs] = animals
// console.log(cats)
// console.log(dogs)

// const {name, sound, feedingReqiurements: {food, water}} = cats
// console.log(water)

// CHALLENGE: uncomment the code below and see the car stats rendered
// import React from "react";
// import ReactDOM from "react-dom";

const [honda, tesla] = cars;
var {
  model,
  coloursByPopularity: [hondaTopColour, hondaSecondColour],
  speedStats: { topSpeed: hondaTopSpeed, zeroToSixty: hondaZeroToSixty }
} = honda;
var {
  model,
  coloursByPopularity: [teslaTopColour, teslaSecondColour],
  speedStats: { topSpeed: teslaTopSpeed, zeroToSixty: teslaZeroToSixty }
} = tesla;
console.log(hondaTopSpeed);

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Colour</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
