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
        document.addEventListener("keydown", (event) => {
        switch (event.keyCode) {
            case 37:
                console.log("left arrow key pressed\n XPOS: " + this.x)
                this.x -= 10
                break
            case 38:
                console.log("up arrow key pressed\n YPOS: " + this.y)
                this.y -= 10
                break
            case 39:
                console.log("right arrow key pressed\n XPOS: " + this.x)
                this.x += 10
                break
            case 40:
                console.log("down arrow key pressed\n YPOS: " + this.y)
                this.y += 10
                break
        }
        })
    }
}