/*
    1. TODO: countDown
        Write a function called countdown that accepts a number as a parameter and every 
        1000 milliseconds decrements the value and console.logs it. Once the value is 0 it 
        should log “DONE!” and stop.
    
    2. TODO: randomGame
        Write a function called randomGame that selects a random number between 0 and 1 
        every 1000 milliseconds and each time that a random number is picked, add 1 to a counter. 
        If the number is greater than .75, stop the timer and console.log the number of tries it 
        took before we found a number greater than .75.
*/
function countDown(int) {
  // anonymous function
  let time = setInterval(function () {
    int--;
    if (int > 0) {
      console.log(int);
    } else {
      clearInterval(time);
      console.log("DONE!");
    }
  }, 1000);
}

function randomGame() {
  let counter = 0;
  let timer = setInterval(function () {
    let randNum = Math.random() * 1;
    randNum = randNum.toFixed(2);
    counter++;
    if (randNum > 0.75) {
      clearInterval(timer) +
        console.log(
          `The number of tries it took before we found a number greater than .75 ${counter}`
        );
    }
  }, 1000);
}
countDown(4);
randomGame();
