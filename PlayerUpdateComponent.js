//define player
let playerWidth = 50
let playerHeight = 50
let enemyArea = 25

//define offset to move player
let offset = 5

class PlayerUpdateComponent extends Component {
    constructor(parent, x, y, w, h) {
        super(parent)

        this.x = x
        this.y = y
        this.w = w
        this.h = h
    }

    update() {
        //check for input from arrow keys, update location accordingly taking into account boundaries
        if (leftArrowPress && !(this.x <= leftBoundary)) {
            this.x -= offset
        }
        if (rightArrowPress && !(this.x >= rightBoundary - playerWidth)) {
            this.x += offset
        }
        if (upArrowPress && !(this.y <= topBoundary + enemyArea)) {
            this.y -= offset
        }
        if (downArrowPress && !(this.y >= bottomBoundary - playerHeight)) {
            this.y += offset
        }

    }
}