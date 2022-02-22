import Input from "../engine/Input.js"

function getCanvas() {
  let canvas = document.querySelector("#canv");
  let ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  return { canvas, ctx };
}

//function to detect when a key has been pressed
function detectKeyDown(e) {
  switch (e.keyCode) {
    case 37:
      console.log("left arrow key pressed")
      Input.leftArrowPress = true
      break
    case 38:
      console.log("up arrow key pressed")
      Input.upArrowPress = true
      break
    case 39:
      console.log("right arrow key pressed")
      Input.rightArrowPress = true
      break
    case 40:
      console.log("down arrow key pressed")
      Input.downArrowPress = true
      break
  }
}

//function to detect when a key has been released
function detectKeyUp(e) {
  switch (e.keyCode) {
    case 37:
      console.log("left arrow key released")
      Input.leftArrowPress = false
      break
    case 38:
      console.log("up arrow key released")
      Input.upArrowPress = false
      break
    case 39:
      console.log("right arrow key released")
      Input.rightArrowPress = false
      break
    case 40:
      console.log("down arrow key released")
      Input.downArrowPress = false
      break
  }
}

function getRandomX(minRange, maxRange) {
  let min = Math.ceil(minRange)
  let max = Math.floor(maxRange);
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRandomY(minRange, maxRange) {
  let min = Math.ceil(minRange)
  let max = Math.floor(maxRange);
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export {getCanvas, detectKeyDown, detectKeyUp, getRandomX, getRandomY}
