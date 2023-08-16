class GameScene {
    constructor(gameObjects, assetStore) {
        this.container = new GameObjectContainer(gameObjects)
        this.assetStore = assetStore
    }

    update() {
        this.container.update()
    }

    render(ctx) {
        this.container.render(ctx)
    }
}
