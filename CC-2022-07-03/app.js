/* You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters. */
//P: string word
//R: string letters, the middle character of param. 1 if odd, 2 if even. return same caps as input? 
//E: Pretzel -> “T”, Best -> “es”
//P: function that takes in a string parameter. 

function getMiddle(s){
  return s.slice((s.length - 1) / 2, s.length / 2 + 1);
}