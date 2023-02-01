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

        //the code below draws a blue circle in the center of the player, use for 
        //collision debugging
        // ctx.fillStyle = "blue"
        // ctx.strokeStyle = "blue"

        // ctx.beginPath();
        // ctx.arc(
        //     updateComponent.x + (updateComponent.w / 2),
        //     updateComponent.y + (updateComponent.h / 2),
        //     5,
        //     0,
        //     Math.PI*2);
        // ctx.fill();
        // ctx.stroke();
    }
}

export default PlayerDrawComponent

//(one.x + one.w) / 2, (one.y + one.h) / 2