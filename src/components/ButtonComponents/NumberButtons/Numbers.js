import React from "react";
import { mynumbers } from "../../../data";
import { NumberButton } from "./NumberButton.js";

console.log("outside");
console.log(mynumbers);
//import any components needed
// example of import from data.js. Note all the ../ This is how we move through folders.
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

function alerty() {
  alert("clicked");
}
export default function Numbers() {
  // STEP 2 - add the imported data to state
  const [num, setNum] = React.useState(mynumbers[0]);
  console.log(num);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {mynumbers.map(x => {
        return (
          <NumberButton
            buttonFunction={() => {
              alerty();
            }}
            buttonLabel={x}
          />
        );
      })}
    </div>
  );
}
