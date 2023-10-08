let prompt = require('prompt-sync')();
let input = prompt('Input Grade:')
let enteredGrade = parseFloat(input)


function grades (x){
    //grade selector
    if (x > 79 && x<= 100) return "A"
    else if (60 <= x && x<= 79) return "B"
    else if (50<= x && x<= 59) return "C"
    else if (40<= x && x<= 49) return "D"
    else if (40 > x ) return "E"
    else return "no grade detected!"

}
//check the grade and log the results to console
console.log (grades(enteredGrade))
