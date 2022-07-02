/*In this little assignment, you are given a string of space-separated numbers and have to return the highest and lowest number.
//PREP 
//P string nums space between. Is it possible for the input to contain any letters or special characters? No. Assume negatives. What if empty string? What if only one number in string?
//R high and low. String? What to return in cases where I can’t return high and low?
//E “1 2 3” => “1 3”
//P create a function that takes in a string. Split the string using a space as the delimiter. Sort the array. Pull out the values of the array at indexes 0 and array.length-1 and store them in a variable. Return the variable.*/
function getHighAndLow(str){
    let arr = numbers.split(' ').sort((a,b)=> a-b);
    return `${arr[arr.length-1]} ${arr[0]}`;
}