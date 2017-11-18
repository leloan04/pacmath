$(document).ready(function() {

    var minNumber = 1;
    var maxNumber = 100;
    var targetNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    targetNumber = 20;

    $("#targetNumber").append(" " + targetNumber);
    
    var wins=0;
    var lives=3;

    var counter=0;

    var ghostNumber = [20, 9, 55, 1];
    $("#blinky").attr("data-ghostValue", ghostNumber[0]);
    
    $("#pinky").attr("data-ghostValue", ghostNumber[1]);

    $("#inky").attr("data-ghostValue", ghostNumber[2]);

    $("#clyde").attr("data-ghostValue", ghostNumber[3]);

// Assign numbers in array to each image for whenever clicked
// Each image is used to add to get to the targetNumber

    $(".ghost").on("click", function(){

        console.log($(this).attr("data-ghostValue"));
        // If targetNumber is reached, user wins, if loses, user loses
        // a life
        counter = counter + parseInt($(this).attr("data-ghostValue"));
        console.log(counter);

        $("#counterDisplay").html(counter);

        if (counter === targetNumber) {
            wins++;
            $("#winsDisplay").html(wins);
            // targetNumber needs to change after user wins/matches other targetNumber
            targetNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
            $("#targetNumber").html(targetNumber);
            //counter needs to be reset to 0 so user can start adding another number
            counter = 0;
            $("#counterDisplay").html(counter);
            //the player wins

        } else if (counter > targetNumber) {
            //decrease lives
            lives--;
            $("#livesDisplay").html(lives);
            //target number resets and gets displayed on html
            targetNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
            $("#targetNumber").html(targetNumber);
            counter = 0;
            $("#counterDisplay").html(counter);

            if (lives<0) {
                wins=0;
                $("#winsDisplay").html(wins);
                lives=3;
                $("#livesDisplay").html(lives);
                $(".ghost").hide();
            };
        
        } else {
            //do nothing
        }
        //targetNumber needs to be reset when RESET button is actually clicked
        // Reset game once all lives are lost with RESET button
    });

    $("#resetButton").on("click", function(){
        wins=0;
        $("#winsDisplay").html(wins);
        lives=3;
        $("#livesDisplay").html(lives);
        targetNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
        $("#targetNumber").html(targetNumber);
        counter = 0;
        $("#counterDisplay").html(counter);
        $(".ghost").show();
        //lives need to be reset
        //new targetNumber
        //wins need to be reset
        //counter needs to be reset
    });







});   