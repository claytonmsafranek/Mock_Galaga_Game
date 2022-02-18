//define player
let playerWidth = 50
let playerHeight = 50
let enemyArea = 25

//define offset to move player
let offset = 1

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
        if (leftArrowPress && !(this.x <= leftPlayerBoundary)) {
            this.x -= offset
        }
        if (rightArrowPress && !(this.x >= rightPlayerBoundary - playerWidth)) {
            this.x += offset
        }
        if (upArrowPress && !(this.y <= topPlayerBoundary + enemyArea)) {
            this.y -= offset
        }
        if (downArrowPress && !(this.y >= bottomPlayerBoundary - playerHeight)) {
            this.y += offset
        }

    }
}