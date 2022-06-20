/* mplement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max) */
function generateRange(min, max, step){
    //PREP
      //P: n1 = start, n2 = end, n3 = count by
      //R: array of ints going from n1 to n2 counting by n3
      //E: 2,10,2 -> 2,4,6,8,10
      //P: iterate from min to max, counting by each step.
      let arr = [];
      for(min; min <= max; min += step){
        arr.push(min);
      }
      return arr;
    }