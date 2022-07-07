/* Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them. */
//P: lowercase string 
//R: Jaden-cased string
//E: Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
//   Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
//P: function that takes in a string. Split the str using spaces as the delimiter. Write loop that changes each character at index 0 to uppercase. Join with “ “ and return.
String.prototype.toJadenCase = function () {
    return this.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};