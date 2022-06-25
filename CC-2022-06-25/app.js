/* Write a function that returns a string in which firstname is swapped with last name.
Example(Input --> Output)
//PREP
//P: string? Array? Object? String. Will I have to account for middle names? last name prefixes? I will assume that no suffix will be passed in.
//R: string w/ first name + last name position switched
//E ‘Bob Bobberson’ -> ‘Bobberson Bob’
//P: a function takes in a string parameter, then splits the string at the space, turning it into an array. Save the first name into a variable while removing it splice(). push() the first name into the array. Return the joined array.*/
function lastFirst(str) {
     let arr = str.split(' ');
     let first = arr.splice(0,1);
     arr.push(first);
    return arr.join(' ');
}