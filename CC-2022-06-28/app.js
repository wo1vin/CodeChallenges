/*Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]     
   7     	     6         5          4          3                  2          1  (YOU ARE HERE AT THE FRONT OF THE QUEUE)

If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.
Note: there will always be exactly one wolf in the array */

function warnTheSheep(queue) {
     //PREP you = end of arr
  //P: array of numbers, only one wolf in arr. will any elements be empty, null, undefined, or not an integer? are there any lambs to account for?
  //R: strings. wolf = last el? -> pls go away, else -> warn sheep.
  //E: ['sheep','sheep','wolf','sheep','sheep',] -> "Oi! Sheep number 1! You are about to be eaten by a wolf!"
  //P: check if the wolf is in the last element in the array, and return accordingly
  
  return (queue[queue.length - 1] === 'wolf') ? 
    "Pls go away and stop eating my sheep" : 
    `Oi! Sheep number ${queue.length - (queue.indexOf('wolf')+1)}! You are about to be eaten by a wolf!`
}
