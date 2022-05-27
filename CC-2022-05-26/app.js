/* Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

if x > y: 3 points
if x < y: 0 point
if x = y: 1 point */
function points(games) {
    let total = 0; 
    for(game of games){
        let scores = game.split(':');
        if(scores[0] > scores[1]) {
            total += 3;
        } else if(scores[0] == scores[1]){
            total += 1;
        }
    } return total;
}