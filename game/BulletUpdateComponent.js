import Component from "../engine/Component.js"
import Constants from "../game/Constants.js"
import Time from "../engine/Time.js"
import Game from "../engine/Game.js"
import Collisions from "../engine/Collisions.js"

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
        //add on velocity to x and y coordinates - check for boundaries
        if (this.x >= Constants.rightBulletBoundary - 6 || this.x <= Constants.leftBulletBoundary) {
            //hit right or left side, change direction
            this.velocityX = (-1 * this.velocityX)

        }
        //hasn't hit either side, continue normal
        this.x = this.x + this.velocityX * Time.secondsBetweenFrame
        this.y = this.y + this.velocityY * Time.secondsBetweenFrame

        //check if ball has gone out of view, if so, delete it
        if (this.y > Constants.bottomBulletBoundary) {
            //console.log("mark for delete")
            this.parent.markForDelete = true
        }

        //check if bullet hit a player
        let player = Game.findByTypeOne("PlayerGameObject")
        let playerComp = player.getComponent("PlayerUpdateComponent")
        //let bulletComp = bullet.getComponent("BulletUpdateComponent")

        if (Collisions.inCollision(playerComp, this)) {            
            //remove the bullet all together to indicate it collided
            //this.parent.markForDelete = true

            //go back to start scene
            Game.changeScene(2)
        }

    }

}

export default BulletUpdateComponent
