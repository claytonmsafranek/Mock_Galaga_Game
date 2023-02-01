class Game {
    static scenes = []
    static currentSceneIndex = 0
    static nextSceneIndex = -1

    static scene() {
        return Game.scenes[Game.currentSceneIndex]
    }

    static getSpecificScene(index) {
        return Game.scenes[index]
    }

    static findByType(type) {
        return Game.scene().gameObjects.filter(go => go.constructor.name == type)
    }

    static findByTypeOne(type) {
        return Game.scene().gameObjects.find(go=>go.constructor.name == type)
    }

    static findInOtherScene(type, sceneNum){
        let scene = Game.getSpecificScene(sceneNum)
        let found = scene.gameObjects.find(go=>go.constructor.name == type)
        return found
    }

    static updateScene() {
        if (Game.nextSceneIndex != -1) {
            Game.currentSceneIndex = Game.nextSceneIndex
            Game.nextSceneIndex = -1
            Game.scene().restart()
        }
    }

    static changeScene(index) {
        Game.nextSceneIndex = index
    }
    
}

export default Game
