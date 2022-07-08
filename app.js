/* Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char. */
//P: string, any char
//R: bool determining if str has same num of x’s and o’s. Case insensitive
//E: XO("ooxx") => true, XO("xooxx") => false, XO("ooxXm") => true
//P: function that takes in a string. Turn the string to lowercase. loop through index counting the number of x and o values and storing the count in separate variables. Return whether the numbers are equal
function XO(str) {
    let arr = str.toLowerCase().split('');
    let xS = 0, oS = 0;
    for (let i = 0; i < arr.length ; i++){
        if (arr[i] === 'x'){ 
            xS++;
        } else if (arr[i] === 'o'){ 
            oS++;
        }
    }
    return xS === oS;
}