// ## ** randomGame **

//   Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and each time that a random number is picked, add 1 to a counter.If the number is greater than .75, stop the timer and console.log the number of tries it took before we found a number greater than .75.

let tries = 0;

function randomGame() {
  let startGame = setInterval(function () {
    let num = Math.random(0, 1);
    tries++;
    console.log(`Attempt: ${tries}, Number: ${num}`);
    if (num > 0.75) {
      console.log(`It took ${tries} attempts, to get a number above 0.75!`);
      clearInterval(startGame);
    }
    
  }, 1000);
}

randomGame();