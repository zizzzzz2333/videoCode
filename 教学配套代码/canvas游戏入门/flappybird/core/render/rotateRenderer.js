class RotateRenderer {
    constructor(ctx) {
        this.ctx = ctx
    }

    render(gameObject, rotation = 0) {
        const x = gameObject.x
        const y = gameObject.y
        const img = gameObject.img
        const w = gameObject.width
        const h = gameObject.height

        this.ctx.save()

        let w2 = w / 2
        let h2 = h / 2
        this.ctx.translate(x + w2, y + h2)
        this.ctx.rotate(rotation * Math.PI / 180)
        this.ctx.translate(-w2, -h2)
        this.ctx.drawImage(img, 0, 0)

        this.ctx.restore()
    }
}
