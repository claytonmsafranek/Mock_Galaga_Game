class EnemyGameObject extends GameObject {
    constructor(x, y, w, h) {
        super()

        this.components.push(new EnemyUpdateComponent(parent, x, y, w, h))
        this.components.push(new EnemyDrawComponent(this))
    }

    update() {
        this.components.filter(c=>c.update).forEach(c=>c.update())
    }

    draw() {
        this.components.filter(c=>c.draw).forEach(c=>c.draw(ctx))
    }
}
