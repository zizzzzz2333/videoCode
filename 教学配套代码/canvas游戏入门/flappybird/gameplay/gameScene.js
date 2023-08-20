class GameScene {
    constructor(gameObjects, assetStore, ctx) {
        this.container = new GameObjectContainer(gameObjects)
        this.assetStore = assetStore
        this.ctx = ctx

        this._createBackground()

        const birdImg = this.assetStore.imageByName('bird')
        this.bird = new Bird(100, 50, birdImg.img)

        const pipeImg = this.assetStore.imageByName('pipe')
        this.pipe = new Pipe(600, 0, pipeImg.img)
        this.nextPipeIndex = 0
        this.nextPipe = this.pipe.pipeList[this.nextPipeIndex]

        const groundImg = this.assetStore.imageByName('ground')
        this.ground = new Ground(0, 440, groundImg.img)

        const messageImg = this.assetStore.imageByName('message')
        this.message = new StartMessage(50, 100, messageImg.img)

        const gameOverImg = this.assetStore.imageByName('gameover')
        this.gameOver = new GameOverMessage(50, 190, gameOverImg.img)

        this.score = new Score(130, 50, 0, assetStore)

        this.container.addGameObject(this.background)
        this.container.addGameObject(this.ground)
        this.container.addGameObject(this.message)

        this._addEvents()
    }

    _createBackground() {
        const bgImg = this.assetStore.imageByName('bg')
        const bgPosition = new Position(0, 0)
        const gameObject = new GameObjectNew(bgPosition, bgImg.img)
        const renderer = new PlainRenderer(this.ctx)
        this.background = new Background(gameObject, renderer)
    }

    _start() {
        this.container.addGameObjectBefore(this.pipe, this.ground)
        this.container.addGameObject(this.score)
        this.container.addGameObject(this.bird)
        this.container.removeGameObject(this.message)

        this._removeEvents()
    }

    _keydownEventsHandler = (event) => {
        if(event.key === 'j')  {
            this._start()
        }
    }

    _removeEvents() {
        document.removeEventListener('keydown', this._keydownEventsHandler)
    }

    _addEvents() {
        document.addEventListener('keydown', this._keydownEventsHandler)
    }

    _stopAll() {
        this.bird.fall()
        this.ground.stop()
        this.pipe.stop()
        this.container.addGameObject(this.gameOver)
    }

    _birdHitGround() {
        const groundHeight = 416
        if (this.bird.gameObject.y >= groundHeight) {
            this._stopAll()
        }
    }

    _birdHitPipe() {
        if (hit(this.bird.gameObject, this.pipe.pipeList)) {
            this._stopAll()
        }
    }

    _reComputeNextPipe() {
        const pairPipeCount = 2
        this.nextPipeIndex = (this.nextPipeIndex + pairPipeCount) % this.pipe.count
        this.nextPipe = this.pipe.pipeList[this.nextPipeIndex]
    }

    _increaseScore() {
        const scoreBar = this.nextPipe.x + this.nextPipe.w
        const birdCrossedPipe = this.bird.gameObject.x > scoreBar
        if (birdCrossedPipe) {
            this.score.addOnePoint()
            this._reComputeNextPipe()
        }
    }

    update() {
        this.container.update()
        this._birdHitGround()
        this._birdHitPipe()
        this._increaseScore()
    }

    render(ctx) {
        this.container.render(ctx)
    }
}
