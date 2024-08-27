/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

window.onload = function() {
  console.log();
  console.log("Hello Rigo from the console!");
  const p = document.getElementById("excuse");
  p.innerText = tengoMiedo();
};
function tengoMiedo() {
  let positionwho = Math.floor(Math.random() * who.length);
  let positionaction = Math.floor(Math.random() * action.length);
  let positionwhat = Math.floor(Math.random() * what.length);
  let positionwhen = Math.floor(Math.random() * when.length);

  console.log(positionwho);
  console.log(positionaction);
  console.log(positionwhat);
  console.log(positionwhen);

  let results = `${who[positionwho]} ${action[positionaction]} ${what[positionwhat]} ${when[positionwhen]}`;

  return results;
}
