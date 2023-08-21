class Pipes {
    constructor(x, y, img, renderer) {
        this._renderer = renderer
        this._pipeWidth = img.width
        this._pipeSpeed = 3
        this.pipeList = this._setupPipeList(x, y, img)

        this.nextPipeIndex = 0
        this.nextPipe = this.pipeList[this.nextPipeIndex]
    }

    _setupPipeList(x, y, img) {
        let pipeList = []
        const pipeNum = 4
        const margin = this._pipeWidth * 4
        for (let i = 0; i < pipeNum; i++) {
            const pipes = this._generatePairPipe(x + i * margin, img)
            pipeList = pipeList.concat(pipes)
        }
        return pipeList
    }

    _generatePairPipe(x, img) {
        const randomHeight = [250, 300, 320, 350, 400]
        const pipeHeight = randomHeight[getRandomInt(0, 4)]
        const upperPipeHeight = pipeHeight - 430
        const pipe = new GameObject(new Position(x, pipeHeight), img)
        const upPipe = new GameObject(new Position(x, upperPipeHeight), img)
        return [pipe, upPipe]
    }

    update() {
        this._moveBackward()
        this._moveForward()
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

    _movePipeToLast(pipe, offset) {
        pipe.x += offset
    }

    _moveBackward() {
        this.pipeList.forEach((gameObject) => {gameObject.x -= this._pipeSpeed})
    }

    get count() {
        return this.pipeList.length
    }

    stop() {
        this._pipeSpeed = 0
    }

    reComputeNextPipe() {
        const pairPipeCount = 2
        this.nextPipeIndex = (this.nextPipeIndex + pairPipeCount) % this.count
        this.nextPipe = this.pipeList[this.nextPipeIndex]
    }

    get scoreBar() {
        return this.nextPipe.x + this.nextPipe.width
    }

    render() {
        this._renderer.render(this.pipeList)
    }
}
