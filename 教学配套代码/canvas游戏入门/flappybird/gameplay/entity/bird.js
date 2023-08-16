class Bird {
    constructor(x, y, img) {
        this.gameObject = new GameObject(x, y, img)
        this._ySpeed = 0
        this._maxYSpeed = 15
        this._jumpSpeed = -7
        this._ySpeedDelta = 0.7

        this._moveUp = false
        this._addEvents()
    }

    _keydownEventsHandler = (event) => {
        if(event.key === 'j')  {
            this._moveUp = true
        }
    }

    _keyupEventsHandler = (event) => {
        if(event.key === 'j')  {
            this._moveUp = false
        }
    }

    _addEvents() {
        document.addEventListener('keydown', this._keydownEventsHandler)
        document.addEventListener('keyup', this._keyupEventsHandler)
    }

    _updateYSpeed() {
        if (this._moveUp) {
            this._ySpeed = this._jumpSpeed
        }

        if (this._ySpeed < this._maxYSpeed) {
            this._ySpeed += this._ySpeedDelta
        }

        const groundHeight = 415
        this.gameObject.y += this._ySpeed
        if (this.gameObject.y > groundHeight) {
            this.gameObject.y = groundHeight
        }
    }

    fall() {
        document.removeEventListener('keydown', this._keydownEventsHandler)
        document.removeEventListener('keyup', this._keyupEventsHandler)
    }

    update() {
        this._updateYSpeed()
    }

    render(ctx) {
        this.gameObject.render(ctx)
    }
}
