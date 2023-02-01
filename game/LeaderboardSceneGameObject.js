import GameObject from "../engine/GameObject.js"
import Text from "../engine/Text.js"
import TextDraw from "../engine/TextDraw.js"
import Game from "../engine/Game.js"
import { getCanvas, getContext } from "../engine/Utilities.js"
import PrefabTextSmall from "../engine/PrefabTextSmall.js"
import PrefabTextLarge from "../engine/PrefabTextLarge.js"
import { checkLeaderboard, getLeaderboard, postPlayerScore } from "../engine/LeaderboardUtils.js"
import LeaderboardSceneUpdateComponent from "./LeaderboardSceneUpdateComponent.js"



class LeaderboardSceneGameObject extends GameObject {
    constructor(x, y) {
        super()
        this.x = x
        this.y = y
        this.start()
    }

    async start() {
        let canvas = getCanvas()
        let ctx = getContext(canvas)
        this.components.push(new LeaderboardSceneUpdateComponent(this))

        //getLeaderboard calls game API to retrieve the top 5 players in descending order
        let leaderboard = await getLeaderboard()
        console.log(leaderboard)

        //add the leaderboard heading
        this.components.push(new PrefabTextLarge("Leaderboard", (canvas.width / 2) - 275, (canvas.height / 2) - 300, "Leaderboard"))


        //loop through all leaderboard entires and put them into prefab text objects
        for (let i = 0; i < leaderboard.length; i++) {
            let offset = (canvas.height / 12) * i
            this.components.push(new PrefabTextSmall("LeaderboardEntry", (canvas.width / 2) - 275, (canvas.height / 3) + offset, i + 1 + ".   " + leaderboard[i].player + " . . . . . . . . . . " + leaderboard[i].score))
        }


    }

}

export default LeaderboardSceneGameObject
