$(document).ready(function() {

    var minNumber = 1;
    var maxNumber = 100;
    var targetNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);

    $("#targetNumber").append(" " + targetNumber);
    
    var wins=0;
    var lives=3;

    var counter=0;

    var ghostNumber = [20, 9, 55, 1];

// Assign numbers in array to each image for whenever clicked
// Each image is used to add to get to the targetNumber

$(".ghost").on("click", function(){

$("#blinky").attr("data-ghostValue", ghostNumber[0]);

$("#pinky").attr("data-ghostValue", ghostNumber[1]);

$("#inky").attr("data-ghostValue", ghostNumber[2]);

$("#clyde").attr("data-ghostValue", ghostNumber[3]);

// If targetNumber is reached, user wins, if loses, user loses
// a life

// Reset game once all lives are lost with RESET button
})









});   