import { getCanvas } from "../engine/Utilities.js"

class Constants {
    //bullet boundaries
    static leftBulletBoundary = 0
    static rightBulletBoundary = getCanvas().width
    static bottomBulletBoundary = getCanvas().height

    //player boundaries
    static leftPlayerBoundary = 0
    static rightPlayerBoundary = getCanvas().width
    static topPlayerBoundary = 0
    static bottomPlayerBoundary = getCanvas().height

    //define player
    static playerWidth = 50
    static playerHeight = 50
    static enemyArea = 25

    
}

export default Constants
