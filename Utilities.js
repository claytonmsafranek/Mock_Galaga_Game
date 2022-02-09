function getCanvas() {
    let canvas = document.querySelector("#canv");
    let ctx = canvas.getContext("2d");
  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    return { canvas, ctx };
  }

// function detectKeyMovement(event) {
//     switch (event.keyCode) {
//         case 37:
//             console.log("left arrow key pressed")
//             break
//         case 38:
//             console.log("up arrow key pressed")
//             break
//         case 39:
//             console.log("right arrow key pressed")
//             break
//         case 40:
//             console.log("down arrow key pressed")
//             break
//     }
// }
