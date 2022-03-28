import Component from "../engine/Component.js"
import Time from "../engine/Time.js"

class ScoreUpdateComponent extends Component {
    constructor(parent) {
        super(parent)
        this.score = 0
    }

    update() {
        let text = this.parent.getComponent("Text")
        text.text = "Score: " + this.score

        let timeToUpdateScore = 2000
        if (Time.timePassedScore >= timeToUpdateScore) {
            this.score++
            Time.timePassedScore = 0
        }

    }

}

export default ScoreUpdateComponent
