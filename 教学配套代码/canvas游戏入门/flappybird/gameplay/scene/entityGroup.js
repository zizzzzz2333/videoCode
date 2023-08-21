class EntityGroup {
    constructor(assetStore, rendererGroup) {
        this.assetStore = assetStore
        this.rendererGroup = rendererGroup
        this._createEntities()
    }

    _createEntities() {
        this._createBackground()
        this._createBird()
        this._createPipes()
        this._createGrounds()
        this._createStartMessage()
        this._createGameOver()
        this._createScore()
    }

    _createBackground() {
        this.background = createSingleEntity({
            entityClass: Background,
            x: 0,
            y: 0,
            img: this.assetStore.imageByName('bg').img,
            renderer: this.rendererGroup.plainRenderer,
        })
    }

    _createBird() {
        this.bird = createSingleEntity({
            entityClass: Bird,
            x: 100,
            y: 50,
            img: this.assetStore.imageByName('bird').img,
            renderer: this.rendererGroup.rotateRenderer,
        })
    }

    _createPipes() {
        const pipeImg = this.assetStore.imageByName('pipe')
        this.pipes = new Pipes(
            600,
            0,
            pipeImg.img,
            this.rendererGroup.mixFlipYAndPlainRenderer,
        )
    }

    _createGrounds() {
        const groundImg = this.assetStore.imageByName('ground')
        this.grounds = new Grounds(
            0,
            440,
            groundImg.img,
            this.rendererGroup.plainRenderer,
        )
    }

    _createStartMessage() {
        this.message = createSingleEntity({
            entityClass: StartMessage,
            x: 50,
            y: 100,
            img: this.assetStore.imageByName('message').img,
            renderer: this.rendererGroup.plainRenderer,
        })
    }

    _createGameOver() {
        this.gameOver = createSingleEntity({
            entityClass: GameOverMessage,
            x: 50,
            y: 190,
            img: this.assetStore.imageByName('gameover').img,
            renderer: this.rendererGroup.plainRenderer,
        })
    }

    _createScore() {
        this.score = new Score(
            130,
            50,
            0,
            this.assetStore,
            this.rendererGroup.plainRenderer,
        )
    }
}
