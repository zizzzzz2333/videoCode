class MixFlipYAndPlainRenderer {
    constructor(ctx) {
        this.ctx = ctx
        this.flipYRenderer = new FlipYRenderer(ctx)
        this.plainRenderer = new PlainRenderer(ctx)
    }

    render(gameObjects) {
        gameObjects.forEach((gameObject, index) => {
            const isOdd = index % 2 !== 0
            if (isOdd) {
                this.flipYRenderer.render(gameObject)
            } else {
                this.plainRenderer.render(gameObject)
            }
        })
    }
}
