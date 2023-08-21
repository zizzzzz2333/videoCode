class RendererGroup{
    constructor(ctx) {
        this.plainRenderer = new PlainRenderer(ctx)
        this.rotateRenderer = new RotateRenderer(ctx)
        this.mixFlipYAndPlainRenderer = new MixFlipYAndPlainRenderer(ctx)
    }
}
