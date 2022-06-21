/* your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise. */
function xor(a, b) {
    //PREP
    //P: two bools
    //R: bool
    //E: true & true == false, false & true == true
    //P: evaluate whether exactly one of params is true
    //return a === true && b === false ? true : b === true && a === false ? true : false;

    //refactored:
    return a != b;
  }