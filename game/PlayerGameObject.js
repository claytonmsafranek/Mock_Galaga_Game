import Component from "../engine/Component.js"
import GameObject from "../engine/GameObject.js"
import PlayerUpdateComponent from "../game/PlayerUpdateComponent.js"
import PlayerDrawComponent from "../game/PlayerDrawComponent.js"

class PlayerGameObject extends GameObject {
    constructor(x, y, w, h) {
        super()

        this.components.push(new PlayerUpdateComponent(parent, x, y, w, h))
        this.components.push(new PlayerDrawComponent(this))
    }

    update() {
        this.components.filter(c=>c.update).forEach(c=>c.update())
    }

    draw(ctx) {
        this.components.filter(c=>c.draw).forEach(c=>c.draw(ctx))
    }
}

export default PlayerGameObject
