/*Trolls are attacking your comment section!
A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
Your task is to write a function that takes a string and return a new string with all vowels removed.
*/
//PREP remove vowels with function. Is y considered a vowel? No. will there be any other data types passed in? Should I account for empty strings?
//P string
//R new string w/o vowels
//E “This website is for losers LOL!" -> "Ths wbst s fr lsrs LL!".
//P function will take in a string that will never be empty. I should turn the string into an array, and also store the abc vowels into a separate array. Then, I could filter the vowels out of the string array while converting each letter to lower case and return the newly joined string.
function antiTroll(str){
    const vowels = ['a','e','i','o','u'];
    return str.split('').filter(letter => !vowels.includes(letter.toLowerCase()).join(''));
}
