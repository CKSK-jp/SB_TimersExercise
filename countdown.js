// ## ** countdown **

//  Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it.Once the value is 0 it should log “DONE!” and stop.

function countDown(n) {
  // check if we reached 0, in this case print "DONE!" after 1 second
  if (n === 0) {
    return setTimeout(function () {
      console.log("DONE!");
    }, 1000);
  }
  // check for non integer arguments
  else if (n <= 0 || !Number.isInteger(n)) {
    return console.log("Please enter a positive integer");
  }
  setTimeout(function () {
    console.log(n);
    n--;
    // schedule callback to the original function
    countDown(n);
  }, 1000);
}

//initialize countdown program with a 10 count
countDown(10);