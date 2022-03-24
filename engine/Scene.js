class Scene {
    constructor(title) {
        this.title = title
        //this.gameObjects = []
    }

    restart() {
        this.gameObjects = []
        this.start()
    }

    update(ctx) {
        for (let gameObject of this.gameObjects) {
            gameObject.update(ctx)
        }
    }

    draw(ctx) {
        //fill grey background
        ctx.fillStyle = "grey"
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)

        for (let gameObject of this.gameObjects) {
            gameObject.draw(ctx)
        }
    }

    remove() {
        this.gameObjects = this.gameObjects.filter(g=>!g.markForDelete)
    }

}

export default Scene
