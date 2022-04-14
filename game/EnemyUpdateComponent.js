import Component from "../engine/Component.js"
import Time from "../engine/Time.js"
import Constants from "./Constants.js"
import Collisions from "../engine/Collisions.js"
import Game from "../engine/Game.js"



//define player
let enemyWidth = 50
let enemyHeight = 50

class EnemyUpdateComponent extends Component {
    constructor(parent, x, y, w, h, velocityY) {
        super(parent)

        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.velocityY = velocityY
    }

    update() {
        //increase position of enemy based on velocity Y
        if(this.velocityY != null) {
            this.y += this.velocityY 
        }


        //check if enemy hit player
        let player = Game.findByTypeOne("PlayerGameObject")
        let playerComp = player.getComponent("PlayerUpdateComponent")
        if (Collisions.inCollision(playerComp, this)){
            //remove the enemy all together to indicate it collided
            this.parent.markForDelete = true

            //go back to start scene
            //Game.changeScene(0)
        }

        //check if enemy has gone off scrren, if so remove it
        if (this.y > Constants.bottomEnemyBoundary) {
            console.log(" enemy marked for delete")
            this.parent.markForDelete = true
        }


    }
}

export default EnemyUpdateComponent
