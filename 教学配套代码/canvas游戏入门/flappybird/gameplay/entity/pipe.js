class Pipe {
    constructor(x, y, img) {
        this._pipeWidth = img.width
        this._pipeSpeed = 3
        this.pipeList = this._setup(x, y, img)
    }

    _setup(x, y, img) {
        let pipeList = []
        const pipeNum = 4
        for (let i = 0; i < pipeNum; i++) {
            const margin = this._pipeWidth * 4
            const pipes = this._generatePairPipe(x + i * margin, img)
            pipeList = pipeList.concat(pipes)
        }
        return pipeList
    }

    get count() {
        return this.pipeList.length
    }

    _generatePairPipe(x, img) {
        const randomHeight = [250, 300, 320, 350, 400]
        const pipeHeight = randomHeight[getRandomInt(0, 4)]
        const upperPipeHeight = pipeHeight - 430
        const pipe = new GameObject(x, pipeHeight, img)
        const upPipe = new GameObject(x, upperPipeHeight, img)
        return [pipe, upPipe]
    }

    _moveForward() {
        const margin = this._pipeWidth * 4
        const pairPipeNum = 4
        this.pipeList.forEach((gameObject) => {
            if (gameObject.x <= -this._pipeWidth) {
                gameObject.x += margin * pairPipeNum
            }
        })
    }

    _moveBackward() {
        this.pipeList.forEach((gameObject) => {gameObject.x -= this._pipeSpeed})
    }

    stop() {
        this._pipeSpeed = 0
    }

    update() {
        this._moveBackward()
        this._moveForward()
    }

    render(ctx) {
        this.pipeList.forEach((gameObject, index) => {
            if (index % 2 !== 0) {
                gameObject.render(ctx, true)
            } else {
                gameObject.render(ctx)
            }
        })
    }
}
