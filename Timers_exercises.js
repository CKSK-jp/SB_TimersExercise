function countDown(n) {
  if (n === 0) {
    return setTimeout(function () {
      console.log("DONE!");
    }, 1000);
  }
  else if (n <= 0 || !Number.isInteger(n)) {
    return console.log("Please enter a positive integer");
  }
  setTimeout(function () {
    console.log(n);
    n--;
    countDown(n);
  }, 1000);
}
countDown(10);