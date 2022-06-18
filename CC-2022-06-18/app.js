/* Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number. */
function squareOrSquareRoot(array) {
    //PREP
    //P: int arr forEach /map/arr from
    //R: new arr 
    //E: 4: 2, 3: 9, 5: 25, 8: 64
    //P: if the square root of x is not an integer, square x. else, return x.
    //return array.map(x, function(x){
    return array.map(a => Math.sqrt(a) % 1 == 0 ? Math.sqrt(a) : (a * a));
  }