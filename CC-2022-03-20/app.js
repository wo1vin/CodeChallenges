/* Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation. */
function sumArray(array) {
  
    if (array == null || array.length <= 2) {
      return 0
    }
    
    const max = Math.max.apply(Number,array);
    const min = Math.min.apply(Number,array);
    let sum = array.reduce((acc,c)=> acc + c, 0);
  
    return sum - max - min;
  }