import Scene from "../engine/Scene.js"
import Text from "../engine/Text.js"
import TextDraw from "../engine/TextDraw.js"
import StartGameObject from "./StartGameObject.js"
import StartUpdateComponent from "./StartUpdateComponent.js"
import LeaderboardSceneGameObject from "./LeaderboardSceneGameObject.js"

class LeaderboardScene extends Scene {
    constructor() {
        super("Leaderboard Scene")
    }

    start() {
        this.gameObjects.push(new LeaderboardSceneGameObject(50, 50))
    }
}

export default LeaderboardScene
