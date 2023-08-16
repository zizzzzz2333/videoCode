class GameScene {
    constructor(gameObjects, assetStore) {
        this.container = new GameObjectContainer(gameObjects)
        this.assetStore = assetStore

        const bgImg = this.assetStore.imageByName('bg')
        this.background = new Background(0, 0, bgImg.img)

        const birdImg = this.assetStore.imageByName('bird')
        this.bird = new Bird(100, 50, birdImg.img)

        const pipeImg = this.assetStore.imageByName('pipe')
        this.pipe = new Pipe(600, 0, pipeImg.img)

        const groundImg = this.assetStore.imageByName('ground')
        this.ground = new Ground(0, 440, groundImg.img)

        this.container.addGameObject(this.background)
        this.container.addGameObject(this.pipe)
        this.container.addGameObject(this.ground)
        this.container.addGameObject(this.bird)
    }

    _stopAll() {
        this.bird.fall()
        this.ground.stop()
        this.pipe.stop()
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

    update() {
        this.container.update()
        this._birdHitGround()
        this._birdHitPipe()
    }

    render(ctx) {
        this.container.render(ctx)
    }
}
