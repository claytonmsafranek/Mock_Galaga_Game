import Component from "../engine/Component.js"
import {getCanvas, getRandomX, getRandomY} from "../engine/Utilities.js"
import Constants from "../game/Constants.js"
import Time from "../engine/Time.js"
import PlayerUpdateComponent from "./PlayerUpdateComponent.js"

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
        let canvas = getCanvas()
        let randomX = getRandomX(0, canvas.width)
        let randomY = getRandomY((canvas.height / 2), canvas.height)

        //add on velocity to x and y coordinates - check for boundaries
        if (this.x >= Constants.rightBulletBoundary - 6 || this.x <= Constants.leftBulletBoundary) {
            //hit right or left side, change direction
            this.velocityX = -1 * this.velocityX

        }

        //hasn't hit either side, continue normal
        this.x = this.x + this.velocityX
        this.y = this.y + this.velocityY

        //might need to add a check in to see if a bullet game object goes off t he screen, remove it 
        //from gameObjects to keep game from backing up and becoming slow
    }

    getX() {
        let val = this.x
        //return this.x() //this doesn't
        console.log(val) //this works
    }
}

export default BulletUpdateComponent
