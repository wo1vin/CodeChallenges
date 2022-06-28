/* Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
don't worry about uppercase vowels
y is not considered a vowel for this kata */
//PREP
//P: a string will it ever not be a string? Does they y count as a vowel? No.
//R: string without lowercase vowels
//E: ‘Table” -> “Tbl”
//P: “string” .split() I guess we’re splitting the string into an array.  then , we could filter the array using an array containing the lowercase vowels before joining and returning the array.
function shortcut (str) {
     const vowels = ['a','e','i','o','u'];
     return str.split('').filter(el => vowels.includes(el) ? false : true).join('');
}
