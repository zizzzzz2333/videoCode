class GameObjectContainer {
    constructor(gameObjects) {
        this._gameObjects = gameObjects
    }

    addGameObject(gameObject) {
        this._gameObjects.push(gameObject)
    }

    addGameObjects(gameObjects) {
        this._gameObjects = this._gameObjects.concat(gameObjects)
    }

    addGameObjectBefore(gameObject, before) {
        const index = this._gameObjects.indexOf(before)
        const hasBefore = index > -1
        if (hasBefore) {
            this._gameObjects.splice(index, 0, gameObject)
        }
    }

    removeGameObject(gameObject) {
        const index = this._gameObjects.indexOf(gameObject)
        const hasBefore = index > -1
        if (hasBefore) {
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
