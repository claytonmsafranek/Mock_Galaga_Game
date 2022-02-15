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
        //check for input from arrow keys, update location accordingly
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

    }
}