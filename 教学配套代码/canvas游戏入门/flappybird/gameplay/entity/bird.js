class Bird {
    constructor(gameObject, renderer) {
        this.gameObject = gameObject
        this.renderer = renderer

        this._ySpeed = 0
        this._maxYSpeed = 15
        this._jumpSpeed = -7
        this._ySpeedDelta = 0.7
        this._maxHeight = -30
        this._rotation = 0
        this._maxRotation = 30
        this._rotationDelta = 3
        this._jumpRotation = -30

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

    _jump() {
        if (this._moveUp) {
            this._ySpeed = this._jumpSpeed
            this._rotation = this._jumpRotation
        }
    }

    _updateRotation() {
        if (this._rotation < this._maxRotation) {
            this._rotation += this._rotationDelta
        }
    }

    _updateYSpeed() {
        if (this._ySpeed < this._maxYSpeed) {
            this._ySpeed += this._ySpeedDelta
        }
    }

    _checkOnGround() {
        const groundHeight = 416
        this.gameObject.y += this._ySpeed
        const birdOnGround = this.gameObject.y > groundHeight
        if (birdOnGround) {
            this.gameObject.y = groundHeight
            this._rotation = 0
        }
    }

    _clampMaxHeight() {
        const birdOverMaxHeight = this.gameObject.y < this._maxHeight
        if (birdOverMaxHeight) {
            this.gameObject.y = this._maxHeight
        }
    }

    fall() {
        this._moveUp = false
        document.removeEventListener('keydown', this._keydownEventsHandler)
        document.removeEventListener('keyup', this._keyupEventsHandler)
    }

    update() {
        this._jump()
        this._updateYSpeed()
        this._updateRotation()
        this._checkOnGround()
        this._clampMaxHeight()
    }

    render(ctx) {
        this.renderer.render(this.gameObject, this._rotation)
    }
}
