/* The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored). */
function cockroachSpeed(s) {
    //speed from km/hr to cm/sec round down
    //1 km = 100,000 cm
     return Math.floor((s * 100000) / 60 / 60);
  }