/*The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.
You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.
For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.
All inputs will be integers. Please return an integer. Round down.*/
//PREP calc how much duty-free whiskey to buy to cover the cost of vacation
//P: all integers. Reg price of whiskey, duty-free discount, cost of holiday. Will the discount be a percentage or a decimal?
//R: integer, rounded down 
//E: 10, 10%, 500 => 500 you’d need to buy 500 bottles to cover the cost of the holiday.
//P: we should first multiply the regular cost by the percentage to see how much we’re saving per bottle. Then, we should divide the cost of the vacation by the amount we’re saving per bottle, and round down our answer as we return it.
function payWithDiscount(whiskeyCost,discount,vacationCost){
     return Math.floor(vacationCost / (whiskeyCost * (discount/100) ));
}
