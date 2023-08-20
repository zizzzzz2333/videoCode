class FlipYRenderer {
    constructor(ctx) {
        this.ctx = ctx
    }

    render(gameObject) {
        const x = gameObject.position.x
        const y = gameObject.position.y
        const img = gameObject.img
        const w = gameObject.width
        const h = gameObject.height

        ctx.save()

        let w2 = w / 2
        let h2 = h / 2
        ctx.translate(x + w2, y + h2)
        ctx.scale(1, -1)
        ctx.translate(-w2, -h2)
        ctx.drawImage(img, 0, 0)

        ctx.restore()
    }
}
