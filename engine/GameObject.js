class GameObject {
    constructor() {
        this.components = []
    }

    update() {
        this.components.filter(c => c.update).forEach(c => c.update());
    }
    
    draw(ctx) {
        this.components.filter(c => c.draw).forEach(c => c.draw());
    }
    
    getX() {
        this.components.filter(c=>c.getX).forEach(c=>c.getX()) //not sure if this is convention
    }

}

export default GameObject
