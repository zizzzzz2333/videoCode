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
