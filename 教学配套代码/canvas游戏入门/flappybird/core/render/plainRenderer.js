class PlainRenderer {
    constructor(ctx) {
        this.ctx = ctx
    }

    render(gameObject) {
        const x = gameObject.x
        const y = gameObject.y
        const img = gameObject.img
        this.ctx.drawImage(img, x, y)
    }
}
