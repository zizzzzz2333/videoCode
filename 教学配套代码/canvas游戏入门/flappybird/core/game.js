class Game {
    constructor(canvas, assetStore) {
        this.canvas = canvas
        this.ctx = this.canvas.getContext("2d");
        this.assetStore = assetStore
    }

    setScene(scene) {
        this.scene = scene
    }

    update() {
        this.scene.update()
    }

    render() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.scene.render()
    }

    runLoop() {
        this.update()
        this.render()
        requestAnimationFrame(this.runLoop.bind(this))
    }
}
