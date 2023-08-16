class GameScene {
    constructor(gameObjects, assetStore) {
        this.container = new GameObjectContainer(gameObjects)
        this.assetStore = assetStore

        const bgImg = this.assetStore.imageByName('bg')
        this.background = new Background(0, 0, bgImg.img)

        const birdImg = this.assetStore.imageByName('bird')
        this.bird = new Bird(100, 100, birdImg.img)

        const pipeImg = this.assetStore.imageByName('pipe')
        this.pipe = new Pipe(600, 0, pipeImg.img)

        const groundImg = this.assetStore.imageByName('ground')
        this.ground = new Ground(0, 440, groundImg.img)

        this.container.addGameObject(this.background)
        this.container.addGameObject(this.bird)
        this.container.addGameObject(this.pipe)
        this.container.addGameObject(this.ground)
    }

    update() {
        this.container.update()
    }

    render(ctx) {
        this.container.render(ctx)
    }
}
