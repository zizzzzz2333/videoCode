class Pipe {
    constructor(x, y, img) {
        this.pipeWidth = img.width
        this.pipeSpeed = 3
        this.pipeList = this._setup(x, y, img)
        this.pipeImg = img
    }

    _setup(x, y, img) {
        let pipeList = []
        const pipeNum = 4
        for (let i = 0; i < pipeNum; i++) {
            const margin = this.pipeWidth * 4
            const pipes = this._generatePairPipe(x + i * margin, img)
            pipeList = pipeList.concat(pipes)
        }
        return pipeList
    }

    _generatePairPipe(x, img) {
        const randomHeight = [250, 300, 320, 350, 400]
        const pipeHeight = randomHeight[getRandomInt(0, 4)]
        const upperPipeHeight = pipeHeight - 430
        const pipe = new GameObject(x, pipeHeight, img)
        const upPipe = new GameObject(x, upperPipeHeight, img)
        return [pipe, upPipe]
    }

    _addPipe() {
        if (this.pipeList[0].x <= -this.pipeWidth) {
            this.pipeList.shift()
            const lastPipe = this.pipeList[this.pipeList.length - 1]
            const margin = this.pipeWidth * 4
            const pipes = this._generatePairPipe(lastPipe.x + margin, this.pipeImg)
            this.pipeList = this.pipeList.concat(pipes)
        }
    }

    _moveBackward() {
        this.pipeList.forEach((gameObject) => {gameObject.x -= this.pipeSpeed})
    }

    update() {
        this._moveBackward()
        this._addPipe()
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
