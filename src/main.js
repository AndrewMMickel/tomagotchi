import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Tomagotchi } from "./../src/tomagotchi.js";

let fuzzy = new Tomagotchi();
let food = fuzzy.foodLevel;
let rest = fuzzy.sleepLevel;
let mood = fuzzy.moodLevel;
  // $("#food").text(food);

setInterval(() => {
    if (fuzzy.foodLevel > 0) {
        fuzzy.foodLevel--;
         $('#food').text(fuzzy.foodLevel)
      }
    }, 1000);

setInterval(() => {
    fuzzy.sleepLevel--;
    $("#sleep").text(fuzzy.sleepLevel);
    }, 20000);

  // $("#sleep").text(rest);
  // $("#mood").text(mood);
  
$("#feed").click (function(event) {
    event.preventDefault();
    fuzzy.feed();
  
    // fuzzy.setHunger();
    // let foodLevel = fuzzy.feed();
    // console.log(foodLevel);
    // $("#food").text(foodLevel); //put this in an interval
});
$("#sleep").click(function (event) {
     event.preventDefault();
     fuzzy.sleep();

     // fuzzy.setHunger();
     // let foodLevel = fuzzy.feed();
     // console.log(foodLevel);
     // $("#food").text(foodLevel); //put this in an interval
});