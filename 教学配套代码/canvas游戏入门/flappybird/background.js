class Background {
    constructor(x, y, img) {
        this.gameObject = new GameObject(x, y, img)
    }

    update() {

    }

    render(ctx) {
        this.gameObject.render(ctx)
    }
}
