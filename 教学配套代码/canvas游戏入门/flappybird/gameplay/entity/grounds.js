class Grounds {
    constructor(x, y, img, renderer) {
        this._groundWidth = img.width
        this._groundSpeed = 3
        this._groundList = this._setupGroundList(x, y, img)
        this._renderer = renderer
    }

    _setupGroundList(x, y, img) {
        let groundList = []
        const groundNum = 13
        for (let i = 0; i < groundNum; i++) {
            const ground = this._createGround(x + i * this._groundWidth, y, img)
            groundList.push(ground)
        }
        return groundList
    }

    _createGround(x, y, img) {
        const position = new Position(x, y)
        const ground = new GameObject(position, img)
        return ground
    }

    update() {
        this._moveBackward()
        this._addGround()
    }


    _moveBackward() {
        this._groundList.forEach((gameObject) => {
            gameObject.x -= this._groundSpeed
        })
    }

    _addGround() {
        const firstGroundPassedLeftBorder = this._groundList[0].x <= -this._groundWidth
        if (firstGroundPassedLeftBorder) {
            this._removeFirstGround()
            this._addNewLastGround()
        }
    }

    _removeFirstGround() {
        this._groundList.shift()
    }

    _addNewLastGround() {
        const lastGround = this._groundList[this._groundList.length - 1]
        const newLastGroundPosition = new Position(lastGround.x + this._groundWidth, lastGround.y)
        const newLastGround = new GameObject(newLastGroundPosition, lastGround.img)
        this._groundList.push(newLastGround)
    }

    stop() {
        this._groundSpeed = 0
    }

    render() {
        this._groundList.forEach((gameObject) => {this._renderer.render(gameObject)})
    }
}

