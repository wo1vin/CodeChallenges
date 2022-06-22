// CC-2022-06-22  Filling an array (part 1)

// We want an array, but not just any old array, an array with contents!
// Write a function that produces an array with the numbers 0 to N-1 in it.

//PREP 
//P: number. Assuming it will never be zero based on how the question was worded. Will it ever be anything other than a number? Should I be expected to account for numbers passed in as a string? Do we want it to always be positive? If I want to account for negative numbers, how will that change the computation?
//R: array el = 0 to n-1, numbers not strings. 
//E: n = 5 => [0,1,2,3,4] n = -3 => [0,-1,-2,-3,-4] am I understanding the problem correctly?
//P: I have a function that takes in an integer as a parameter. I want to create a loop that iterates from zero to the number that was passed in. On each iteration, I want to use the push method to add an element to the array with the value of i. When the loop ends, return the array.
//Ok, I think that I have everything that I need to start coding. Would you agree?

function zeroToNum(number){
     let arr = [];
     if (number-1 < 0){
          for ( let i = 0; i >= number-1 ; i--){
               arr.push(i);
          }
          return arr;
     } else {
          for ( let i = 0; i <= number-1 ; i++){
               arr.push(i);
          }
          return arr;
     }
}