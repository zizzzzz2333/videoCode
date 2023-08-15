class Game {
    constructor(canvas, gameObjects) {
        this.canvas = canvas
        this.ctx = this.canvas.getContext("2d");
        this.gameObjects = gameObjects
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

class Rect {
    constructor(x, y, w, h, xSpeed) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h

        this.xSpeed = xSpeed

        this.moveRight = false
        this.moveLeft = false
        this.addEvents()
    }

    addEvents() {
        document.addEventListener('keydown', (event) => {
            if(event.key === 'd')  {
                this.moveRight = true
            }
            if(event.key === 'a')  {
                this.moveLeft = true
            }
        })

        document.addEventListener('keyup', (event) => {
            if(event.key === 'd')  {
                this.moveRight = false
            }
            if(event.key === 'a')  {
                this.moveLeft = false
            }
        })
    }

    update() {
        if (this.moveRight) {
            this.x += this.xSpeed
        }
        if (this.moveLeft) {
            this.x -= this.xSpeed
        }
    }

    render(ctx) {
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}


const entry = () => {
    const canvas = document.getElementById("id-canvas");
    if (!canvas.getContext) {
        console.log('浏览器不支持canvas')
    }

    const rect = new Rect(0, 0, 100, 100, 1)
    const gameObjects = [rect]
    const game = new Game(canvas, gameObjects)

    game.runLoop()

}
entry()
