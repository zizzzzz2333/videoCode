class Background {
    constructor(gameObject, renderer) {
        this.gameObject = gameObject
        this.renderer = renderer
    }

    update() {

    }

    render() {
        this.renderer.render(this.gameObject)
    }
}
