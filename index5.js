let prompt = require('prompt-sync')();
let input = prompt('Input speed:')
let enteredGrade = parseFloat(input)


// This is the speed limit in km/h.
const limit = 70


// This function checks the speed of a vehicle and returns a message depending on the speed.
function  checkSpeed(speed) {
  // If the speed is below the limit, return "Ok".
    if (speed <= 70) {
       return "Ok";
    } else {
     // Calculate the number of points the driver gets for speeding.
       let points = Math.floor((speed - 70) / 5);
       // If the driver gets more than 12 points, their license is suspended.
       if (points > 12) {
         return "License suspended";
       } else {
        // Otherwise, return the number of points the driver gets.
         return `Points: ${points}`;
       

       }
    }
   }
   
   // Check the speed and log the result to the console.
   console.log(checkSpeed(input))