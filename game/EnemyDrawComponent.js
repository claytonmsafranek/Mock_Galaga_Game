import Component from "../engine/Component.js"
import GameObject from "../engine/GameObject.js"
import EnemyUpdateComponent from "../game/EnemyUpdateComponent.js"

class EnemyDrawComponent extends Component {
    constructor(parent) {
        super(parent)
    }

    draw(ctx) {
        let updateComponent = this.parent.components.find(c=>c instanceof EnemyUpdateComponent)

        ctx.fillStyle = "red"
        ctx.strokeStyle = "red"

        ctx.beginPath()
        ctx.rect(
            updateComponent.x,
            updateComponent.y,
            updateComponent.w,
            updateComponent.h
        )
        ctx.fill();
        ctx.stroke();
    }


}

export default EnemyDrawComponent
