let startX = 100
let startY = 100
let width = 50
let height = 50

class PlayerUpdateComponent extends Component {
    constructor(parent, x, y, w, h) {
        super(parent)

        this.x = x
        this.y = y
        this.w = w
        this.h = h
    }

    update() {
        if (leftArrowPress) {
            this.x -= 5
        }
        if (rightArrowPress) {
            this.x += 5
        }
        if (upArrowPress) {
            this.y -= 5
        }
        if (downArrowPress) {
            this.y += 5
        }
        //document.addEventListener("keydown", (event) => {
        // switch (keyType) {
        //     case 37:
        //         this.x -= 10
        //         console.log("left arrow key pressed\n XPOS: " + this.x)
        //         break
        //     case 38:
        //         this.y -= 10
        //         console.log("up arrow key pressed\n YPOS: " + this.y)
        //         break
        //     case 39:
        //         this.x += 10
        //         console.log("right arrow key pressed\n XPOS: " + this.x)
        //         break
        //     case 40:
        //         this.y += 10
        //         console.log("down arrow key pressed\n YPOS: " + this.y)
        //         break
        //     }
    }
}