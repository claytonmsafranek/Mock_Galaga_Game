import Component from "../engine/Component.js"
import GameObject from "../engine/GameObject.js"
import EnemyUpdateComponent from "../game/EnemyUpdateComponent.js"
import EnemyDrawComponent from "../game/EnemyDrawComponent.js"

class EnemyGameObject extends GameObject {
    constructor(x, y, w, h, velocityY) {
        super()

        this.components.push(new EnemyUpdateComponent(this, x, y, w, h, velocityY))
        this.components.push(new EnemyDrawComponent(this))
    }

    update() {
        this.components.filter(c=>c.update).forEach(c=>c.update())
    }

    draw(ctx) {
        this.components.filter(c=>c.draw).forEach(c=>c.draw(ctx))
    }
}

export default EnemyGameObject
