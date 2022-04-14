import Scene from "../engine/Scene.js"
import Text from "../engine/Text.js"
import TextDraw from "../engine/TextDraw.js"
import StartGameObject from "./StartGameObject.js"
import StartUpdateComponent from "./StartUpdateComponent.js"
import EndSceneGameObject from "./EndSceneGameObject.js"

class EndScene extends Scene {
    constructor() {
        super("End Scene")
    }

    start() {
        this.gameObjects.push(new EndSceneGameObject(50, 50))
    }
}

export default EndScene