import GameObject from "../engine/GameObject.js"
import Text from "../engine/Text.js"
import TextDraw from "../engine/TextDraw.js"
import EndSceneUpdateComponent from "./EndSceneUpdateComponent.js"
import Game from "../engine/Game.js"
import { getCanvas, getContext } from "../engine/Utilities.js"
import PrefabTextSmall from "../engine/PrefabTextSmall.js"
import PrefabTextLarge from "../engine/PrefabTextLarge.js"
import { checkLeaderboard, getLeaderboard, postPlayerScore } from "../engine/LeaderboardUtils.js"



class EndSceneGameObject extends GameObject {
    constructor(x, y) {
        super()
        this.x = x
        this.y = y
        this.start()
    }

    //might have to add in async to this function before start()
    async start() {
        let canvas = getCanvas()

        //add the game over text
        this.components.push(new PrefabTextLarge("Game Over!", (canvas.width / 2) - 325, canvas.height / 2, "GAME OVER!"))

        //display the player's score
        //this code reaches into the MainScene to look for the ScoreGameObject
        let scoreObject = Game.findInOtherScene("ScoreGameObject", 1)
        let playerScore = scoreObject.getComponent("ScoreUpdateComponent")
        this.components.push(new PrefabTextSmall("Game Over!", (canvas.width / 2) - 100, canvas.height / 2 + 50, "Score: " + playerScore.score))
        this.components.push(new EndSceneUpdateComponent(this))


        //getLeaderboard calls game API to retrieve the top 5 players in descending order
        let leaderboard = await getLeaderboard()
        console.log(leaderboard)


        //POST data - score to send to API
        let postData = {
            score: playerScore.score
        }

        //checkLeaderboard calls game API to see whether or not player's score is good enough
        let scoreGoodEnough = await checkLeaderboard(postData)
        console.log(scoreGoodEnough)

        let usersName = ''
        if (scoreGoodEnough.scoreIsGoodEnough == 'true'){
            //player's score is high enough to be on leaderboard, prompt for input
            console.log("Is user's score good enough: " + scoreGoodEnough)
            usersName = prompt("Please enter your name")
            console.log("users name: " + usersName)

            //json data to send to API
            let toAdd = {
                name : usersName,
                score : playerScore.score
            }
            //call game API postPlayerScore to post the players name and score to be added to leaderboard
            let returnVal = await postPlayerScore(toAdd)
            console.log(returnVal)

        }
        else {
            //player's score is NOT high enough to be on leaderboard, just show leaderboard
            console.log("User's score not good enough. Show leaderboard here")
        }




    }

}

export default EndSceneGameObject
