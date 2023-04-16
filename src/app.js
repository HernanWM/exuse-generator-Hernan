/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#excuse").innerHTML = exuseGenerator();
};

const exuseGenerator = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  const excuseOne = [Math.floor(Math.random() * who.length)];
  const excuseTwo = [Math.floor(Math.random() * action.length)];
  const excuseThree = [Math.floor(Math.random() * what.length)];
  const excuseFour = [Math.floor(Math.random() * when.length)];

  return (
    who[excuseOne] +
    " " +
    action[excuseTwo] +
    " " +
    what[excuseThree] +
    " " +
    what[excuseThree] +
    " " +
    when[excuseFour]
  );
};
