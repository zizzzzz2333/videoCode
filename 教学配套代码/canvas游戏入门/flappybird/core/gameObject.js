class GameObject {
    constructor(x, y, img) {
        this.x = x
        this.y = y
        this.img = img
        this.w = img.width
        this.h = img.height
    }

    render(ctx, flipY = false, rotation = 0) {
        ctx.save()

        let w2 = this.w / 2
        let h2 = this.h / 2
        ctx.translate(this.x + w2, this.y + h2)
        flipY ? ctx.scale(1, -1) : ctx.scale(1, 1)
        ctx.rotate(rotation * Math.PI / 180)
        ctx.translate(-w2, -h2)
        ctx.drawImage(this.img, 0, 0)

        ctx.restore()
    }
}
