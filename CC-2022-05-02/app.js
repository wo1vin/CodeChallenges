/* Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them. */
function between(a, b) {
    let arr = [];
    while(a <=b){
      arr.push(a);
      a++;
    }
    return arr;
  }