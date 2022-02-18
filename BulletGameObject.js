class BulletGameObject extends GameObject {
    constructor(x, y, w, h, velocityX, velocityY) {
        super()

        this.components.push(new BulletUpdateComponent(parent, x, y, w, h, velocityX, velocityY))
        this.components.push(new BulletDrawComponent(this))
    }

    update() {
        this.components.filter(c=>c.update).forEach(c=>c.update())
    }

    draw() {
        this.components.filter(c=>c.draw).forEach(c=>c.draw(ctx))
    }
}
