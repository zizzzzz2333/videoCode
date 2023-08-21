class GameLogic {
    constructor(entityGroup, container) {
        this.entityGroup = entityGroup
        this.container = container
    }

    _keydownEventsHandler = (event) => {
        if(event.key === 'j')  {
            this._start()
        }
    }

    addEvents() {
        document.addEventListener('keydown', this._keydownEventsHandler)
    }

    _start() {
        this.container.addGameObjectBefore(this.entityGroup.pipes, this.entityGroup.grounds)
        this.container.addGameObject(this.entityGroup.score)
        this.container.addGameObject(this.entityGroup.bird)
        this.container.removeGameObject(this.entityGroup.message)

        this._removeEvents()
    }

    _removeEvents() {
        document.removeEventListener('keydown', this._keydownEventsHandler)
    }

    update() {
        this.container.update()
        this._birdHitGround()
        this._birdHitPipe()
        this._increaseScore()
    }

    _birdHitGround() {
        const groundHeight = 416
        if (this.entityGroup.bird.gameObject.y >= groundHeight) {
            this._stopAll()
        }
    }

    _birdHitPipe() {
        if (hit(this.entityGroup.bird.gameObject, this.entityGroup.pipes.pipeList)) {
            this._stopAll()
        }
    }

    _stopAll() {
        this.entityGroup.bird.fall()
        this.entityGroup.grounds.stop()
        this.entityGroup.pipes.stop()
        this.container.addGameObject(this.entityGroup.gameOver)
    }

    _increaseScore() {
        const scoreBar = this.entityGroup.nextPipe.x + this.entityGroup.nextPipe.width
        const birdCrossedPipe = this.entityGroup.bird.gameObject.x > scoreBar
        if (birdCrossedPipe) {
            this.entityGroup.score.addOnePoint()
            this._reComputeNextPipe()
        }
    }

    _reComputeNextPipe() {
        const pairPipeCount = 2
        this.entityGroup.nextPipeIndex = (this.entityGroup.nextPipeIndex + pairPipeCount) % this.entityGroup.pipes.count
        this.entityGroup.nextPipe = this.entityGroup.pipes.pipeList[this.entityGroup.nextPipeIndex]
    }

    render() {
        this.container.render()
    }
}
