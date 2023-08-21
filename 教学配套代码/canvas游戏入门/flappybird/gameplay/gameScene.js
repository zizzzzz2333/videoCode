class GameScene {
    constructor(gameObjects, assetStore, ctx) {
        this.container = new GameObjectContainer(gameObjects)
        this.assetStore = assetStore
        this.ctx = ctx

        this.plainRenderer = new PlainRenderer(this.ctx)
        this.rotateRenderer = new RotateRenderer(this.ctx)
        this.mixFlipYAndPlainRenderer = new MixFlipYAndPlainRenderer(this.ctx)

        this._createBackground()
        this._createBird()
        this._createPipes()
        this._createGrounds()
        this._createStartMessage()
        this._createGameOver()
        this._createScore()

        this.container.addGameObject(this.background)
        this.container.addGameObject(this.grounds)
        this.container.addGameObject(this.message)

        this._addEvents()
    }

    _createBackground() {
        this.background = createSingleEntity({
            entityClass: Background,
            x: 0,
            y: 0,
            img: this.assetStore.imageByName('bg').img,
            renderer: this.plainRenderer,
        })
    }

    _createBird() {
        const birdImg = this.assetStore.imageByName('bird')
        const birdPosition = new Position(100, 50)
        const gameObject = new GameObject(birdPosition, birdImg.img)
        this.bird = new Bird(gameObject, this.rotateRenderer)
    }

    _createPipes() {
        const pipeImg = this.assetStore.imageByName('pipe')
        this.pipes = new Pipes(600, 0, pipeImg.img, this.mixFlipYAndPlainRenderer)

        this.nextPipeIndex = 0
        this.nextPipe = this.pipes.pipeList[this.nextPipeIndex]
    }

    _createGrounds() {
        const groundImg = this.assetStore.imageByName('ground')
        this.grounds = new Grounds(0, 440, groundImg.img, this.plainRenderer)
    }

    _createStartMessage() {
        this.message = createSingleEntity({
            entityClass: StartMessage,
            x: 50,
            y: 100,
            img: this.assetStore.imageByName('message').img,
            renderer: this.plainRenderer,
        })
    }

    _createGameOver() {
        this.gameOver = createSingleEntity({
            entityClass: GameOverMessage,
            x: 50,
            y: 190,
            img: this.assetStore.imageByName('gameover').img,
            renderer: this.plainRenderer,
        })
    }

    _createScore() {
        this.score = new Score(130, 50, 0, this.assetStore, this.plainRenderer)
    }

    _start() {
        this.container.addGameObjectBefore(this.pipes, this.grounds)
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
        this.grounds.stop()
        this.pipes.stop()
        this.container.addGameObject(this.gameOver)
    }

    _birdHitGround() {
        const groundHeight = 416
        if (this.bird.gameObject.y >= groundHeight) {
            this._stopAll()
        }
    }

    _birdHitPipe() {
        if (hit(this.bird.gameObject, this.pipes.pipeList)) {
            this._stopAll()
        }
    }

    _reComputeNextPipe() {
        const pairPipeCount = 2
        this.nextPipeIndex = (this.nextPipeIndex + pairPipeCount) % this.pipes.count
        this.nextPipe = this.pipes.pipeList[this.nextPipeIndex]
    }

    _increaseScore() {
        const scoreBar = this.nextPipe.x + this.nextPipe.width
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
