/* Take an array and remove every second element from the array. Always keep the first element and start removing with the next element. */
function removeEveryOther(arr){
    for(let i = 0; i <= arr.length; i++){
       arr.splice(i+1,1);
      }
    return arr;
  }