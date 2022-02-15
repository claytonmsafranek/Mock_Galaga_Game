function getCanvas() {
  let canvas = document.querySelector("#canv");
  let ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  return { canvas, ctx };
}

function detectKeyDown(e) {
  switch (e.keyCode) {
    case 37:
      console.log("left arrow key pressed")
      leftArrowPress = true
      break
    case 38:
      console.log("up arrow key pressed")
      upArrowPress = true
      break
    case 39:
      console.log("right arrow key pressed")
      rightArrowPress = true
      break
    case 40:
      console.log("down arrow key pressed")
      downArrowPress = true
      break
  }
}

function detectKeyUp(e) {
  switch (e.keyCode) {
    case 37:
      console.log("left arrow key released")
      leftArrowPress = false
      break
    case 38:
      console.log("up arrow key released")
      upArrowPress = false
      break
    case 39:
      console.log("right arrow key released")
      rightArrowPress = false
      break
    case 40:
      console.log("down arrow key released")
      downArrowPress = false
      break
  }
}
