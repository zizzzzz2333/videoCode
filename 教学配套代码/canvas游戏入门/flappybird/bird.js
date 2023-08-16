class Bird {
    constructor(x, y, img, xSpeed) {
        this.gameObject = new GameObject(x, y, img)
        this._xSpeed = xSpeed
        this._ySpeed = 0
        this._maxYSpeed = 15

        this._moveRight = false
        this._moveLeft = false
        this._moveUp = false
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
            if(event.key === 'j')  {
                this._moveUp = true
            }
        })

        document.addEventListener('keyup', (event) => {
            if(event.key === 'd')  {
                this._moveRight = false
            }
            if(event.key === 'a')  {
                this._moveLeft = false
            }
            if(event.key === 'j')  {
                this._moveUp = false
            }
        })
    }

    _updateYSpeed() {
        if (this._moveUp) {
            this._ySpeed = -7
        }

        if (this._ySpeed < this._maxYSpeed) {
            this._ySpeed += 0.7
        }

        const groundHeight = 415
        this.gameObject.y += this._ySpeed
        if (this.gameObject.y > groundHeight) {
            this.gameObject.y = groundHeight
        }
    }

    update() {
        if (this._moveRight) {
            this.gameObject.x += this._xSpeed
        }
        if (this._moveLeft) {
            this.gameObject.x -= this._xSpeed
        }
        this._updateYSpeed()
    }

    render(ctx) {
        this.gameObject.render(ctx)
    }
}
