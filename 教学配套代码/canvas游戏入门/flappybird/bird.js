class Bird {
    constructor(x, y, img) {
        this.gameObject = new GameObject(x, y, img)
        this._ySpeed = 0
        this._maxYSpeed = 15

        this._moveUp = false
        this._addEvents()
    }

    _addEvents() {
        document.addEventListener('keydown', (event) => {
            if(event.key === 'j')  {
                this._moveUp = true
            }
        })

        document.addEventListener('keyup', (event) => {
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
        this._updateYSpeed()
    }

    render(ctx) {
        this.gameObject.render(ctx)
    }
}
