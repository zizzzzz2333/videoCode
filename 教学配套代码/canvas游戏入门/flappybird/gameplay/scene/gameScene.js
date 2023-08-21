class GameScene {
    constructor(game, container) {
        this.container = container
        this.assetStore = game.assetStore

        this._createRendererGroup(game.ctx)
        this._createEntityGroup()
        this._createGameLogic()
        this._addEntitiesToContainer()
        this._addEvents()
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

    _addEntitiesToContainer() {
        this.gameLogic.addEntitiesToContainer()
    }

    _addEvents() {
        this.gameLogic.addEvents()
    }

    update() {
        this.gameLogic.update()
    }

    render(ctx) {
        this.gameLogic.render(ctx)
    }
}
