/* Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100. */
function getGrade (s1, s2, s3) {
    const score = (s1 + s2 + s3)/3;
    switch (true){
        case (90 <= score): return "A";
        case (80 <= score):	return 'B';
        case (70 <= score):	return 'C';
        case (60 <= score):	return 'D';
        case (score < 60): return 'F';
    }
  }