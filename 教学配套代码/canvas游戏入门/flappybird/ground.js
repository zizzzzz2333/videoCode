class Ground {
    constructor(x, y, img) {
        this.groundWidth = img.width
        this.groundSpeed = 3
        this.groundList = this._setup(x, y, img)
    }

    _setup(x, y, img) {
        const groundList = []
        const groundNum = 13
        for (let i = 0; i < groundNum; i++) {
            const ground = new GameObject(x + i * this.groundWidth, y, img)
            groundList.push(ground)
        }
        return groundList
    }

    _moveBackward() {
        this.groundList.forEach((gameObject) => {gameObject.x -= this.groundSpeed})
    }

    _addGround() {
        if (this.groundList[0].x <= -this.groundWidth) {
            this.groundList.shift()
            const lastGround = this.groundList[this.groundList.length - 1]
            const ground = new GameObject(lastGround.x + this.groundWidth, lastGround.y, lastGround.img)
            this.groundList.push(ground)
        }
    }

    update() {
        this._moveBackward()
        this._addGround()
    }

    render(ctx) {
        this.groundList.forEach((gameObject) => {gameObject.render(ctx)})
    }
}

