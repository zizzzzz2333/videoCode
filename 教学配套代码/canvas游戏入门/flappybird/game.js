class Game {
    constructor(canvas, gameObjects, assetStore) {
        this.canvas = canvas
        this.ctx = this.canvas.getContext("2d");
        this.gameObjects = gameObjects
        this.assetStore = assetStore
    }

    update() {
        this.gameObjects.forEach((gameObject) => {
            gameObject.update()
        })
    }

    render() {
        this.gameObjects.forEach((gameObject) => {
            gameObject.render(this.ctx)
        })
    }

    runLoop() {
        this.update()
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.render()
        requestAnimationFrame(this.runLoop.bind(this))
    }
}
