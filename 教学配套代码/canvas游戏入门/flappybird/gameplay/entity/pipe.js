class Pipe {
    constructor(x, y, img, renderer) {
        this._pipeWidth = img.width
        this._pipeSpeed = 3
        this.pipeList = this._setup(x, y, img)
        this._renderer = renderer
    }

    _setup(x, y, img) {
        let pipeList = []
        const pipeNum = 4
        const margin = this._pipeWidth * 4
        for (let i = 0; i < pipeNum; i++) {
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
        const pipe = new GameObjectNew(new Position(x, pipeHeight), img)
        const upPipe = new GameObjectNew(new Position(x, upperPipeHeight), img)
        return [pipe, upPipe]
    }

    _movePipeToLast(pipe, offset) {
        pipe.x += offset
    }

    _moveForward() {
        const marginBetweenPipes = this._pipeWidth * 4
        const pairPipeNum = 4
        const offset = marginBetweenPipes * pairPipeNum
        this.pipeList.forEach((pipe) => {
            const pipePassedLeftBorder = pipe.x <= -this._pipeWidth
            if (pipePassedLeftBorder) {
                this._movePipeToLast(pipe, offset)
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

    render() {
        this._renderer.render(this.pipeList)
    }
}
