import Component from "../engine/Component.js"
import Game from "../engine/Game.js"
import Time from "../engine/Time.js"

class EndSceneUpdateComponent extends Component {
    constructor(parent) {
        super(parent)
        this.time = 0
    }

    update() {
        this.time += Time.secondsBetweenFrame
        if (this.time > 100) {
            //change to the leaderboard scene
            console.log("changing to scene: " + Game.scenes[3].title)
            Game.changeScene(3)
            console.log("end scene index: " + Game.currentSceneIndex)
        }

    }

}

export default EndSceneUpdateComponent
