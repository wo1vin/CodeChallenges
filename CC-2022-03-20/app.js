/* Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation. */
function sumArray(array) {
  
    if (array == null || array.length <= 2) {
      return 0
    }
    
    var max = Math.max.apply(Math, array);
    var min = Math.min.apply(Math, array);
    var sum = 0
    
    for (i = 0; i < array.length; i++) {
      sum += array[i];
     }
  
    return sum - max - min
  }