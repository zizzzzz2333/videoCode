class Background {
    constructor(gameObject, renderer) {
        this.gameObject = gameObject
        this.renderer = renderer

        log('background', this.gameObject, this.renderer)
    }

    update() {

    }

    render() {
        this.renderer.render(this.gameObject)
    }
}
