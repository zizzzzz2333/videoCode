class GameScene {
    constructor(game, container) {
        this.container = container
        this.assetStore = game.assetStore

        this._createRendererGroup(game.ctx)
        this._createEntityGroup()
        this._createGameLogic()
    }

    _createRendererGroup(ctx) {
        this.rendererGroup = new RendererGroup(ctx)
    }

    _createEntityGroup() {
        this.entityGroup = new EntityGroup(this.assetStore, this.rendererGroup)
    }

    _createGameLogic() {
        this.gameLogic = new GameLogic(this.entityGroup, this.container)
    }

    update() {
        this.gameLogic.update()
    }

    render(ctx) {
        this.gameLogic.render(ctx)
    }
}
