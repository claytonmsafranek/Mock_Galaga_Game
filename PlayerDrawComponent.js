class PlayerDrawComponent extends Component {
    constructor(parent) {
        super(parent)
    }

    draw(ctx) {
        let updateComponent = this.parent.components.find(c => c instanceof PlayerUpdateComponent)

        ctx.fillStyle = "black"
        ctx.strokeStyle = "black"

        ctx.beginPath()
        ctx.rect(
            updateComponent.x,
            updateComponent.y,
            updateComponent.w,
            updateComponent.h
        )
        ctx.fill();
        ctx.stroke();


    }


}