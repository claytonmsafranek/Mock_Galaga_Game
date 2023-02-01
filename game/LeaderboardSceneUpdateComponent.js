import Component from "../engine/Component.js"
import Game from "../engine/Game.js"
import Time from "../engine/Time.js"

class LeaderboardSceneUpdateComponent extends Component {
    constructor(parent) {
        super(parent)
        this.time = 0
    }

    update() {
        this.time += Time.secondsBetweenFrame
        if (this.time > 100) {
            //change back to start scene
            console.log("changing to scene: " + Game.scenes[0].title)
            Game.changeScene(0)
        }
    }

}

export default LeaderboardSceneUpdateComponent
