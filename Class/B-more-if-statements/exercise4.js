
let theYear = 2025;

// Write an "if/else" statement below to print either - 
// "Year is in the past"
// "It is the current year"
// "Year is in the future"

if(theYear === 2021){
    message = "It is the current year"; 
}else if(theYear >2021){
    message = "Year is in the future";
}else{
    message = "Year is in the past";
}
console.log(message);

