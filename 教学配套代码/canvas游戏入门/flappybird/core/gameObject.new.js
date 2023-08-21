class GameObjectNew {
    constructor(position, img) {
        this.position = position
        this.img = img
        this.width = img.width
        this.height = img.height
    }

    get x() {
        return this.position.x
    }
    set x(value) {
        this.position.x = value
    }

    get y() {
        return this.position.y
    }
    set y(value) {
        this.position.y = value
    }
}
