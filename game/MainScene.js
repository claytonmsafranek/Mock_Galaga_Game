import Scene from "../engine/Scene.js"
import PlayerGameObject from "./PlayerGameObject.js"
import BulletGameObject from "./BulletGameObject.js"
import EnemyGameObject from "./EnemyGameObject.js"
import { getCanvas, getContext, getRandomX, getRandomY } from "../engine/Utilities.js"
import Time from "../engine/Time.js"
import ScoreGameObject from "./ScoreGameObject.js"


class MainScene extends Scene {
    constructor() {
        super("Main Game Scene")
    }

    start() {
        let canvas = getCanvas()
        let ctx = getContext(canvas)

        //add the player
        let playerX = canvas.width / 2
        let playerY = canvas.height / 1.25
        let playerW = 50
        let playerH = 50
        let player = new PlayerGameObject(playerX, playerY, playerW, playerH)
        this.gameObjects.push(player)


        //add the red enemies
        let numEnemies = 5
        for (let i = 0; i < numEnemies; i++) {
            let offset = (canvas.width / 5)
            let enemyX = 100 + offset * i
            let enemyY = 0
            let enemyW = 25
            let enemyH = 25

            this.gameObjects.push(new EnemyGameObject(enemyX, enemyY, enemyW, enemyH, null))
        }

        //create stationary bullets on top of red enemies
        let numBullets = 5
        for (let i = 0; i < numBullets; i++) {
            let offset = (canvas.width / 5)
            let bulletX = 50 + offset * i + 62
            let bulletY = 10
            let bulletW = 5
            let bulletH = 25

            //below are 5 bullets that stay stationary just to simulate where they will be firing from
            this.gameObjects.push(new BulletGameObject(bulletX, bulletY, bulletW, bulletH, null, null))

            //TO-DO
            //might want to make these just plain old blue circles, not bullet game objects
            //issue I was running into is that just drawing them with ctx wasn't drawing them
        }

        //add the score
        this.gameObjects.push(new ScoreGameObject(20, canvas.height - 50))

    }


    makeBullet() {
        let canvas = getCanvas()
        let num = 5
        for (let j = 0; j < num; j++) {
            let offset = (canvas.width / 5)
            let bulletX = 50 + offset * j + 62
            let bulletY = 10
            let bulletW = 5
            let bulletH = 25

            this.gameObjects.push(new BulletGameObject(bulletX, bulletY, bulletW, bulletH, getRandomX(25, 5), getRandomY(5, 25)))
        }
    }

    spawnEnemy() {
        let canvas = getCanvas()
        let numEnemies = 5
        for (let i = 0; i < numEnemies; i++) {
            let offset = (canvas.width / 5)
            let enemyX = 100 + offset * i
            let enemyY = 11
            let enemyW = 25
            let enemyH = 25
            //let velocityY = 1

            this.gameObjects.push(new EnemyGameObject(enemyX, enemyY, enemyW, enemyH, getRandomY(1, 3)))
        }
    }


}

export default MainScene
