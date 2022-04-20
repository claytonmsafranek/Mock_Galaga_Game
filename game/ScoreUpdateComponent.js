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

        //check score and slowly make bullets shoot faster as score increases
        switch (this.score) {
            case 20:
                Time.millisecondsBetweenBullets = 20
                console.log("Millisecs between bullets = " + Time.millisecondsBetweenBullets)
                break
            case 40:
                Time.millisecondsBetweenBullets = 30
                console.log("Millisecs between bullets = " + Time.millisecondsBetweenBullets)
                break
            case 60:
                Time.millisecondsBetweenBullets = 40
                console.log("Millisecs between bullets = " + Time.millisecondsBetweenBullets)
                break
            case 80:
                Time.millisecondsBetweenBullets = 50
                console.log("Millisecs between bullets = " + Time.millisecondsBetweenBullets)
                break
            case 100:
                Time.millisecondsBetweenBullets = 60
                Time.millisecondsBetweenEnemies = 10
                console.log("Millisecs between bullets = " + Time.millisecondsBetweenBullets)
                break
            case 120:
                Time.millisecondsBetweenBullets = 70
                console.log("Millisecs between bullets = " + Time.millisecondsBetweenBullets)
                break
            case 140:
                Time.millisecondsBetweenBullets = 80
                console.log("Millisecs between bullets = " + Time.millisecondsBetweenBullets)
                break
            case 160:
                Time.millisecondsBetweenBullets = 90
                Time.millisecondsBetweenEnemies = 20
                console.log("Millisecs between bullets = " + Time.millisecondsBetweenBullets)
                break
            case 180:
                Time.millisecondsBetweenBullets = 100
                console.log("Millisecs between bullets = " + Time.millisecondsBetweenBullets)
                break
            case 200:
                Time.millisecondsBetweenBullets = 150
                console.log("Millisecs between bullets = " + Time.millisecondsBetweenBullets)
                break
        }

    }

}

export default ScoreUpdateComponent
