class GameObject {
    constructor(x, y, img) {
        this.x = x
        this.y = y
        this.img = img
        this.w = img.width
        this.h = img.height
    }

    render(ctx, flipY = false) {
        if (flipY) {
            ctx.save()

            let w2 = this.w / 2
            let h2 = this.h / 2
            ctx.translate(this.x + w2, this.y + h2)
            ctx.scale(1, -1)
            ctx.translate(-w2, -h2)
            ctx.drawImage(this.img, 0, 0)

            ctx.restore()
        } else {
            ctx.drawImage(this.img, this.x, this.y)
        }
    }
}
