/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function excuse() {
    let who = ["My dog", "My grandma", "My dad", "My sister"];
    let verbs = ["told me", "attacked me", "bit me", "smiled me"];
    let object = ["the PC", "the mug", "my motorcycle", "my dinner"];
    let time = ["last night.!", "on the weekend.!", "morning.!", "right now.!"];

    let excuse2 = "";

    excuse2 = excuse2 + who[Math.floor(Math.random() * 4)] + " ";
    excuse2 = excuse2 + verbs[Math.floor(Math.random() * 4)] + " ";
    excuse2 = excuse2 + object[Math.floor(Math.random() * 4)] + " ";
    excuse2 = excuse2 + time[Math.floor(Math.random() * 4)];

    return excuse2;
  }
  document.querySelector("#generate").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = excuse();
  });

  console.log("Hello Rigo from the console!");
};
