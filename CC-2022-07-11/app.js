/* In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell). */
//P: string letters ATCG 
//R: string letters compliment of param
//E: TTCAG => AAGTC
//P: function that takes in a string of capitalized letters as a parameter, where the letters will only include ACGT. Turn str to array. array. map(el) check if its a, return t. If not, check if its c ? return g. If not, check if its g? Return C. if not, check if it’s T? Return A. return joined array.
function DNAStrand(dna) {
  return dna.split('').map(function(el) {
    return { A : 'T', T : 'A', C : 'G', G : 'C'} [el];
  }).join('');
}
