import {detectKeyDown, detectKeyUp} from "../engine/Utilities.js"

class Input {
    static leftArrowPress = false
    static rightArrowPress = false
    static upArrowPress = false
    static downArrowPress = false



    static attach(document) {
        //check for arrow key input
        document.addEventListener("keydown", (e) => detectKeyDown(e))
        document.addEventListener("keyup", (e) => detectKeyUp(e))
    }

}

export default Input
