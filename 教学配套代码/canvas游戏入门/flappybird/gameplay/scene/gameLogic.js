class GameLogic {
    constructor(entityGroup, container) {
        this.entityGroup = entityGroup
        this.container = container

        this._addEntitiesToContainer()
        this._addEvents()
    }

    _addEntitiesToContainer() {
        this.container.addGameObjects([
            this.entityGroup.background,
            this.entityGroup.grounds,
            this.entityGroup.message
        ])
    }

    _addEvents() {
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
        const bird = this.entityGroup.bird.gameObject
        const pipes = this.entityGroup.pipes.pipeList
        if (hit(bird, pipes)) {
            this._stopAll()
        }
    }

    _stopAll() {
        const group = this.entityGroup
        group.bird.fall()
        group.grounds.stop()
        group.pipes.stop()
        this.container.addGameObject(group.gameOver)
    }

    _increaseScore() {
        const group = this.entityGroup
        const scoreBar = group.pipes.scoreBar
        const birdCrossedPipe = group.bird.gameObject.x > scoreBar
        if (birdCrossedPipe) {
            group.score.addOnePoint()
            group.pipes.reComputeNextPipe()
        }
    }

    render() {
        this.container.render()
    }
}
