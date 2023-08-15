class Bird {
    constructor(x, y, img, xSpeed) {
        this.gameObject = new GameObject(x, y, img)
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
            this.gameObject.x += this.xSpeed
        }
        if (this.moveLeft) {
            this.gameObject.x -= this.xSpeed
        }
    }

    render(ctx) {
        this.gameObject.render(ctx)
    }
}
