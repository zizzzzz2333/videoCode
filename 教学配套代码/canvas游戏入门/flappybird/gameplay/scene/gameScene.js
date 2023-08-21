class GameScene {
    constructor(game, container) {
        this.container = container
        this.assetStore = game.assetStore

        this._createRendererGroup(game.ctx)
        this._createEntityGroup()
        this._addEntitiesToContainer()
        this._createGameLogic()
        this._addEvents()
    }

    _createRendererGroup(ctx) {
        this.rendererGroup = new RendererGroup(ctx)
    }

    _createEntityGroup() {
        this.entityGroup = new EntityGroup(this.assetStore, this.rendererGroup)
    }

    _addEntitiesToContainer() {
        this.entityGroup.addEntitiesToContainer(this.container)
    }

    _createGameLogic() {
        this.gameLogic = new GameLogic(this.entityGroup, this.container)
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
