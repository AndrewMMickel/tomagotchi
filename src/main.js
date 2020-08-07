import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Tomagotchi } from "./../src/tomagotchi.js";

$(document).ready(function () {
    $('#start').click(function () {
        let fuzzy = new Tomagotchi();
        // let food = fuzzy.foodLevel;
        // let rest = fuzzy.sleepLevel;
        // let mood = fuzzy.moodLevel;
        
        // $('#food').text(fuzzy.foodLevel);
        // $("#rest").text(fuzzy.sleepLevel);
        // $("#mood").text(fuzzy.moodLevel);
        
        setInterval(() => {
            $("#rest").text(fuzzy.sleepLevel);
            $('#food').text(fuzzy.foodLevel);
            $("#mood").text(fuzzy.moodLevel);
        }, 1000);

        fuzzy.gettingTired();
        fuzzy.setHunger();        

        $("#feed").click(function () {
            fuzzy.feed();
            $('#food').text(fuzzy.foodLevel);
        });

        $("#sleep").click(function () {
            fuzzy.sleep();
            $("#rest").text(fuzzy.sleepLevel);
        });

        $("#love").click(function () {
            fuzzy.mood();
            $("#mood").text(fuzzy.moodLevel);
        });
    });
});