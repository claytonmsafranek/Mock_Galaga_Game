class BulletUpdateComponent extends Component {
    constructor(parent, x, y, w, h, velocityX, velocityY) {
        super(parent)

        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.velocityX = velocityX
        this.velocityY = velocityY
    }

    update() {
        let randomX = getRandomX(0, canvas.width)
        let randomY = getRandomY((canvas.height / 2), canvas.height)

        //add on velocity to x and y coordinates - check for boundaries
        if (this.x >= rightBulletBoundary - 6 || this.x <= leftBulletBoundary) {
            //hit right or left side, change direction
            this.velocityX = -1 * this.velocityX

        }

        //hasn't hit either side, continue normal
        this.x += this.velocityX
        this.y += this.velocityY

    }
}
