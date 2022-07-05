/* Given an integral number, determine if it's a square number:
In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
The tests will always use some integral number, so don't worry about that in dynamic typed languages.*/

//P: int. Negatives? zero?
//R: bool. Is param a square num or not?
//E:  -1  =>  false, 0  =>  true, 3  =>  false
//P: function that takes in an integer. Check to see if the square root of the int is equal to the int, return the appropriate bool value.
function perfectSquareCheck(int){
    return Math.sqrt(int) === Math.floor(Math.sqrt(int)) ? true : false;
}