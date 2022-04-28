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

    //might have to add in async to this function before start()
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

        // this will be how I POST data to server
        // let postData = {
        //     score: 100,
        //     name: 'joe'
        // };

        //interact with game API
        fetch('http://ec2-44-202-119-23.compute-1.amazonaws.com/api/getLeaderboard',
            {
                method: 'GET'
                //body: JSON.stringify(postData) //USED IN POST
            })
            .then((response) => {
                //get raw json object
                return response.json();
            })
            .then((myJson) => {
                //access elements of raw json object
                console.log(myJson);
                let leaderboard = myJson;
                console.log(leaderboard.player);
            });

    }

}

export default EndSceneGameObject
