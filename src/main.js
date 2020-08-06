import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Tomagotchi } from "./../src/tomagotchi.js";

$(document).ready(function () {
    $('#start').click(function () {
        let fuzzy = new Tomagotchi();
        let food = fuzzy.foodLevel;
        let rest = fuzzy.sleepLevel;
        let mood = fuzzy.moodLevel;
        
        $('#food').text(fuzzy.foodLevel);
        $("#rest").text(fuzzy.sleepLevel);
        $("#love").text(fuzzy.moodLevel);
        
        setInterval(() => {
            if (fuzzy.foodLevel > 0) {
                fuzzy.foodLevel--;
                $('#food').text(fuzzy.foodLevel)
            }
        }, 1000);

        setInterval(() => {
            fuzzy.sleepLevel--;
            $("#rest").text(fuzzy.sleepLevel);
        }, 20000);


        $("#feed").click(function (event) {
            event.preventDefault();
            fuzzy.feed();
            $('#food').text(fuzzy.foodLevel);

            console.log(fuzzy.foodLevel);

        });

        $("#sleep").click(function (event) {
            event.preventDefault();
            fuzzy.sleep();
            $("#rest").text(fuzzy.sleepLevel);

            console.log(fuzzy.sleepLevel);

        });

        $("#love").click(function (event) {
            event.preventDefault();
            fuzzy.mood();
            $("#mood").text(fuzzy.moodLevel);

            console.log(fuzzy.moodLevel);

        });
    });
});