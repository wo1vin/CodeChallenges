/* Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "  */
function doubleChar(str) {
  str.split("");
  let arr = [];
  for(let i = 0; i <= str.length; i++){
    arr.push(str[i]);
    arr.push(str[i]);
  }
  return arr.join("");
}