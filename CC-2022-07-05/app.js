/* Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number. */
//P: non-negative int
//R: int with digits descending (highest possible number)
//E: Input: 42145 Output: 54421
//P: function that takes in a number. Split the number into an array, sort it in descending order. Join the array and return it as an integer value.
function sortToHighestNum(n){
    return Number(("" + n).split("").sort((a,b) => b - a).join(""));
}