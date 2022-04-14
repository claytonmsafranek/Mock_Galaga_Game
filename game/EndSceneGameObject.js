import GameObject from "../engine/GameObject.js"
import Text from "../engine/Text.js"
import TextDraw from "../engine/TextDraw.js"
import EndSceneUpdateComponent from "./EndSceneUpdateComponent.js"
import Game from "../engine/Game.js"
import { getCanvas, getContext } from "../engine/Utilities.js"
import PrefabTextSmall from "../engine/PrefabTextSmall.js"
import PrefabTextLarge from "../engine/PrefabTextLarge.js"

class EndSceneGameObject extends GameObject {
    constructor(x, y) {
        super()
        this.x = x
        this.y = y
        this.start()
    }

    start() {
        let canvas = getCanvas()

        //add the game over text
        this.components.push(new PrefabTextLarge("Game Over!", (canvas.width / 2) - 325, canvas.height / 2, "GAME OVER!"))

        //display the player's score
        //this code reaches into the MainScene to look for the ScoreGameObject
        let scoreObject = Game.findInOtherScene("ScoreGameObject", 1)
        let playerScore = scoreObject.getComponent("ScoreUpdateComponent")
        this.components.push(new PrefabTextSmall("Game Over!", (canvas.width / 2) - 100, canvas.height / 2 + 50, "Score: " + playerScore.score))

        this.components.push(new EndSceneUpdateComponent(this))
    }

}

export default EndSceneGameObject
