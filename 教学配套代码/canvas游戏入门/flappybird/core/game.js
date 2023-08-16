class Game {
    constructor(canvas, scene) {
        this.canvas = canvas
        this.ctx = this.canvas.getContext("2d");
        this.scene = scene
    }

    update() {
        this.scene.update()
    }

    render() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.scene.render(this.ctx)
    }

    runLoop() {
        this.update()
        this.render()
        requestAnimationFrame(this.runLoop.bind(this))
    }
}
