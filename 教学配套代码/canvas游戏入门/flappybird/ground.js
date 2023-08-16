class Ground {
    constructor(x, y, img) {
        this._groundWidth = img.width
        this._groundSpeed = 3
        this._groundList = this._setup(x, y, img)
    }

    _setup(x, y, img) {
        let groundList = []
        const groundNum = 13
        for (let i = 0; i < groundNum; i++) {
            const ground = new GameObject(x + i * this._groundWidth, y, img)
            groundList.push(ground)
        }
        return groundList
    }

    _moveBackward() {
        this._groundList.forEach((gameObject) => {gameObject.x -= this._groundSpeed})
    }

    _addGround() {
        if (this._groundList[0].x <= -this._groundWidth) {
            this._groundList.shift()
            const lastGround = this._groundList[this._groundList.length - 1]
            const ground = new GameObject(lastGround.x + this._groundWidth, lastGround.y, lastGround.img)
            this._groundList.push(ground)
        }
    }

    update() {
        this._moveBackward()
        this._addGround()
    }

    render(ctx) {
        this._groundList.forEach((gameObject) => {gameObject.render(ctx)})
    }
}

