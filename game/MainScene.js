import Scene from "../engine/Scene.js"
import PlayerGameObject from "./PlayerGameObject.js"
import BulletGameObject from "./BulletGameObject.js"
import EnemyGameObject from "./EnemyGameObject.js"
import { getCanvas, getRandomX, getRandomY } from "../engine/Utilities.js"
import Time from "../engine/Time.js"


class MainScene extends Scene {
    constructor() {
        super("Main Game Scene")

        let canvas = getCanvas()

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

            this.gameObjects.push(new EnemyGameObject(enemyX, enemyY, enemyW, enemyH))
        }

        //create stationary bullets on top of red enemies
        let numBullets = 5
        for (let i = 0; i < numBullets; i++) {
            let offset = (canvas.width / 5)
            let bulletX = 50 + (canvas.width / 5) * i + 62
            let bulletY = 10
            let bulletW = 5
            let bulletH = 25

            //below are 5 bullets that stay stationary just to simulate where they will be firing from
            this.gameObjects.push(new BulletGameObject(bulletX, bulletY, bulletW, bulletH, null, null))
        }

        //continuously add moving bullets
        // function makeBullet() {
        //     let bullets = []
        //     let num = 5
        //     for (let j = 0; j < num; j++) {
        //         let offset = (canvas.width / 5)
        //         let bulletX = 50 + offset * j + 62
        //         let bulletY = 10
        //         let bulletW = 5
        //         let bulletH = 25

        //         //bullets.push(new BulletGameObject(bulletX, bulletY, bulletW, bulletH, getRandomX(25, 5), getRandomY(5, 25)))
        //         this.gameObjects.push(new BulletGameObject(bulletX, bulletY, bulletW, bulletH, getRandomX(25, 5), getRandomY(5, 25)))
        //     }
        //     return bullets
        // }

        //create bullets
        //console.log("HIT 1")
        if (Time.timePassedBullets >= 2000) {
            console.log("makebullet called")
            this.makeBullet()
            //Time.timePassedBullets = 0
        }
        else {
            console.log("timepassedBullets value: " + Time.timePassedBullets)
        }
        //console.log("HIT 2")


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

            //bullets.push(new BulletGameObject(bulletX, bulletY, bulletW, bulletH, getRandomX(25, 5), getRandomY(5, 25)))
            this.gameObjects.push(new BulletGameObject(bulletX, bulletY, bulletW, bulletH, getRandomX(25, 5), getRandomY(5, 25)))
        }
    }
    

}

export default MainScene
