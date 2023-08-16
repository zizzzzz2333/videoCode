class Bird {
    constructor(x, y, img, xSpeed) {
        this.gameObject = new GameObject(x, y, img)
        this._xSpeed = xSpeed

        this._moveRight = false
        this._moveLeft = false
        this._addEvents()
    }

    _addEvents() {
        document.addEventListener('keydown', (event) => {
            if(event.key === 'd')  {
                this._moveRight = true
            }
            if(event.key === 'a')  {
                this._moveLeft = true
            }
        })

        document.addEventListener('keyup', (event) => {
            if(event.key === 'd')  {
                this._moveRight = false
            }
            if(event.key === 'a')  {
                this._moveLeft = false
            }
        })
    }

    update() {
        if (this._moveRight) {
            this.gameObject.x += this._xSpeed
        }
        if (this._moveLeft) {
            this.gameObject.x -= this._xSpeed
        }
    }

    render(ctx) {
        this.gameObject.render(ctx)
    }
}
