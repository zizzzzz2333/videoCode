class PlainRenderer {
    constructor(ctx) {
        this.ctx = ctx
    }

    render(gameObject) {
        const x = gameObject.position.x
        const y = gameObject.position.y
        const img = gameObject.img
        this.ctx.drawImage(img, x, y)
    }
}
