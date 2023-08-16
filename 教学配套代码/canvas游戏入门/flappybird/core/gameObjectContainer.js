class GameObjectContainer {
    constructor(gameObjects) {
        this._gameObjects = gameObjects
    }

    addGameObject(gameObject) {
        this._gameObjects.push(gameObject)
    }

    update() {
        this._gameObjects.forEach((gameObject) => {
            gameObject.update()
        })
    }

    render(ctx) {
        this._gameObjects.forEach((gameObject) => {
            gameObject.render(ctx)
        })
    }
}
