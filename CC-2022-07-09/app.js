/* An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore the letter case. */
//P: string, can be empty, upper or lowercase characters included
//R: boolean, true if isogram/no repeating letters
//E: “” = true, “blue” = true, “letter” = false
//P: function that takes in a string as a param. Turn the string to lowercase. Create a new Set out of the string, and compare it to the length of the original string.
function isogramCheck(str){
    return Set(str.toLowerCase()).size == str.length;
}