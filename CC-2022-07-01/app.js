/* Square err dig of num. Acc int r int
//P multidigit int. Negatives allowed? No other data types, no null or undefined. Will it ever be empty? What to return if param is 0? What about floats? Assume no floats.
//R int. Concat of each param digit squared.
//E 123 => 149 ? 
//P function takes in an int. If the param === 0, return something.
Else, transform to squares by first stringifying and splitting into array. Loop through each digit to turn the string digit back into a number and square it. Return the new, concatenated elements
*/
function squareDigits(num){

    if (num === 0){ console.log(num) };

    console.log( Number(num.toString().split('').map(digit => digit**2).join('')));     
}

squareDigits(0);
squareDigits(123);