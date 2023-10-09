let prompt = require('prompt-sync')();
let input = prompt('Input Grade:')
let enteredGrade = parseFloat(input)


function grades (c){
    //grade selector
    if (c > 79 && c<= 100) return "A"
    else if (60 <= c && c<= 79) return "B"
    else if (50<= c && c<= 59) return "C"
    else if (40<= c && c<= 49) return "D"
    else if (40 >c ) return "E"
    else return "no grade detected!"

}
//check the grade and log the results to console
console.log (grades(enteredGrade))
