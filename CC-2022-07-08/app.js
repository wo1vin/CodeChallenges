/* This time no story, no theory. The examples below show you how to write function accum:
The parameter of accum is a string which includes only letters from a..z and A..Z. */
//P: string of letters from A to Z
//R: string where the amount of each letter in the parameter increases by one, and the first character of each multiplied letter is capitalized. Each different letter is separated by a dash -
/* Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt" */
//P: function that takes in a string. Split the string per character into array. [r,w,t,F,s. Loop through ea el (use index for multiplying els), capitalize, join using - as delimiter
function accum(s) {
     return s.split('').map((el,i) => el.toUpperCase() + el.toLowerCase().repeat(i)).join('-');
}