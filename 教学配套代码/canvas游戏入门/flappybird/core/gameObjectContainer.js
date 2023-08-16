class GameObjectContainer {
    constructor(gameObjects) {
        this._gameObjects = gameObjects
    }

    addGameObject(gameObject) {
        this._gameObjects.push(gameObject)
    }

    addGameObjectBefore(gameObject, before) {
        const index = this._gameObjects.indexOf(before)
        if (index > -1) {
            this._gameObjects.splice(index, 0, gameObject)
        }
    }

    removeGameObject(gameObject) {
        const index = this._gameObjects.indexOf(gameObject)
        if (index > -1) {
            this._gameObjects.splice(index, 1)
        }
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
