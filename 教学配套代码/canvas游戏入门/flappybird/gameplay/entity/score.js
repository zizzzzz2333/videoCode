class Score {
    constructor(x, y, score, assetStore) {
        this._charWidth = 24
        this.score = score
        this.assetStore = assetStore
        this.charList = this.setup(x, y, assetStore)
        this._initialX = x
    }

    setup(x, y) {
        let charList = []
        const img = this.assetStore.imageByName('0').img
        const char = new GameObject(x, y, img)
        charList.push(char)
        return charList
    }

    _generateChar(char, margin) {
        const img = this.assetStore.imageByName(`${char}`).img
        const x = this.charList[0].x
        const y = this.charList[0].y
        return new GameObject(x + margin, y, img)
    }

    _generateStr(scoreStr) {
        const charList = []
        for (let i = 0; i < scoreStr.length; i++) {
            const c = scoreStr[i]
            const paddingForCharOne = 4
            let margin = i * this._charWidth
            if (c === '1') {
                margin += paddingForCharOne
            }
            const char = this._generateChar(c, margin)
            charList.push(char)
        }
        return charList
    }

    _adjustStrPosition(scoreStr) {
        const length = scoreStr.length
        const offsetCount = (length - 1)
        const offsetUnit = this._charWidth / 2
        const offset = offsetCount * offsetUnit
        this.charList[0].x = this._initialX - offset
    }

    updateChar(score) {
        const scoreStr = score.toString()
        this._adjustStrPosition(scoreStr)
        this.charList = this._generateStr(scoreStr)
    }

    addOnePoint() {
        this.score += 1
        this.updateChar(this.score)
    }

    update() {
        this.addOnePoint()
    }

    render(ctx) {
        this.charList.forEach((char) => {
            char.render(ctx)
        })
    }
}
