/* You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested. */
function otherAngle(a, b) {
    //The sum of the interior angles of a triangle are equal to 180o.
    return 180-a-b;
  }