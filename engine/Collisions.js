import MathPoint from "./math/Point.js"


class Collisions {

    static inCollision(one, two) {
        //check for collision between bullet and player game object

        let rectangleCenter = new MathPoint(one.x + (one.w / 2), one.y + (one.h / 2))
        let circleCenter = new MathPoint(two.x, two.y)

        //Handle the circle
        let circleMin = -two.w
        let circleMax = two.w

        //Handle the rectangle vertices
        let centersVector = rectangleCenter.minus(circleCenter)

        let vert1 = rectangleCenter.plus(new MathPoint(
            one.w / 2,
            one.h / 2))

        let vert1FromCircleCenter = vert1.minus(circleCenter)
        let projection1 = vert1FromCircleCenter.dot(centersVector.normalized())
        vert1 = circleCenter.plus(centersVector.normalized().scale(projection1))

        let vert2 = rectangleCenter.plus(new MathPoint(
            one.w / 2,
            (-1 * one.h) / 2))

        let vert2FromCircleCenter = vert2.minus(circleCenter)
        let projection2 = vert2FromCircleCenter.dot(centersVector.normalized())
        vert2 = circleCenter.plus(centersVector.normalized().scale(projection2))


        let vert3 = rectangleCenter.plus(new MathPoint(
            (-1 * one.w) / 2,
            (-1 * one.h) / 2))

        let vert3FromCircleCenter = vert3.minus(circleCenter)
        let projection3 = vert3FromCircleCenter.dot(centersVector.normalized())
        vert3 = circleCenter.plus(centersVector.normalized().scale(projection3))

        let vert4 = rectangleCenter.plus(new MathPoint(
            (-1 * one.w) / 2,
            one.h / 2))

        let vert4FromCircleCenter = vert4.minus(circleCenter)
        let projection4 = vert4FromCircleCenter.dot(centersVector.normalized())
        vert4 = circleCenter.plus(centersVector.normalized().scale(projection4))

        let minProject = Math.min(...[projection1, projection2, projection3, projection4])
        let maxProject = Math.max(...[projection1, projection2, projection3, projection4])


        //Now check if we are outside
        if (maxProject < circleMin || minProject > circleMax) {
            return false
        }
        //console.log("MinProject: " + minProject)
        //console.log("MaxProject: " + maxProject)
        return true

    }

    //this works but the collisions are really bad/laggy
    static isColliding(one, two) {
        let outside = one.x > two.x + two.w ||
            one.x + one.w < two.x ||
            one.y > two.y + two.h ||
            one.y + one.h < two.y
        return !outside
    }
}

export default Collisions
