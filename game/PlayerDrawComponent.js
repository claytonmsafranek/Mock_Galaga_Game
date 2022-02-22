import Component from "../engine/Component.js"
import GameObject from "../engine/GameObject.js"
import PlayerUpdateComponent from "../game/PlayerUpdateComponent.js"
import {getCanvas, detectKeyDown, detectKeyUp, getRandomX, getRandomY} from "../engine/Utilities.js"

class PlayerDrawComponent extends Component {
    constructor(parent) {
        super(parent)
    }

    draw(ctx) {
        let updateComponent = this.parent.components.find(c=>c instanceof PlayerUpdateComponent)

        ctx.fillStyle = "black"
        ctx.strokeStyle = "black"

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

export default PlayerDrawComponent
