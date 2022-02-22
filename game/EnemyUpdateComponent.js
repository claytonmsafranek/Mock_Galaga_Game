import Component from "../engine/Component.js"
import Time from "../engine/Time.js"

//define player
let enemyWidth = 50
let enemyHeight = 50

class EnemyUpdateComponent extends Component {
    constructor(parent, x, y, w, h) {
        super(parent)

        this.x = x
        this.y = y
        this.w = w
        this.h = h
    }

    update() {
        
    }
}

export default EnemyUpdateComponent
