class FlipYRenderer {
    constructor(ctx) {
        this.ctx = ctx
    }

    render(gameObject) {
        const o = gameObject
        const x = o.x
        const y = o.y
        const img = o.img
        const w = o.width
        const h = o.height

        const ctx = this.ctx
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
