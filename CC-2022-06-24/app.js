//Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.
//PREP function passin num return ascii 
//P number. Should I account for contingencies like the value passed in being a character, a number as a string, an expression?
//R str ASCII schar. Access data? Array ? object?
//E 30 -> “F”
//P function takes in a number, the number is passed into a method to get the correct ascii character, the value is either stored in a new var or returned right away
function getChar(number){
    return String.fromCharCode(number);
}
