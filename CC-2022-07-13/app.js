/* Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed. */
//P: array of +int no floats or negs. Will there be empty elements?
//R: sum of 2 lowest num
//E: 2,45,544,23 -> 25
//P: function that takes in an array. Sort the array. Return the sum of array indexes 0 and 1.
function sumOf2Lowest(arr){
    arr.sort((a,b) => a - b);
    return (arr[0] + arr[1]);
}