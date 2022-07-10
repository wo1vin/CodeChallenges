/* Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.*/
//P: string of wrds. Never empty. Only str
//R: int == length of shortest word
//E: “This is easy” -> “is” 
//P: function that takes in a string. Split the string using space as a delimiter. Create empty string var. That will contain the current smallest string. Check through a loop to compare word lengths, replacing the one stored with whichever is smaller. Return the word stored in var. When loop is done.
function findShort(s){
    let words = s.split(' ');
    let current = words[0].length;
    for (let i = 0; i < words.length; i++){
        if (current > words[i].length){
            current = words[i].length;
        }
    }
    return current;
}
//or
function findShort(s){
    return Math.min.apply(null, s.split(' ').map(w => w.length));
  }