class GameLogic {
    constructor(entityGroup, container) {
        this.entityGroup = entityGroup
        this.container = container
    }

    addEvents() {
        document.addEventListener('keydown', this._keydownEventsHandler)
    }

    _keydownEventsHandler = (event) => {
        if(event.key === 'j')  {
            this._start()
        }
    }

    _start() {
        const group = this.entityGroup
        this.container.addGameObjectBefore(group.pipes, group.grounds)
        this.container.addGameObjects([group.score, group.bird])
        this.container.removeGameObject(group.message)

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
        const birdHitGround = this.entityGroup.bird.gameObject.y >= groundHeight
        if (birdHitGround) {
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
        const scoreBar = this.entityGroup.pipes.scoreBar
        const birdCrossedPipe = this.entityGroup.bird.gameObject.x > scoreBar
        if (birdCrossedPipe) {
            this.entityGroup.score.addOnePoint()
            this.entityGroup.pipes.reComputeNextPipe()
        }
    }

    render() {
        this.container.render()
    }
}
