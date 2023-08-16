class Score {
    constructor(x, y, score, assetStore) {
        this._charWidth = 24
        this.charHeight = 36
        this.score = score
        this.assetStore = assetStore
        this.charList = this.setup(x, y, assetStore)
        this._initialX = x
        this._initialY = y
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

    _adjustStrPosition(scoreStr) {
        const length = scoreStr.length
        const offsetCount = (length - 1)
        const offsetUnit = this._charWidth / 2
        const offset = offsetCount * offsetUnit
        this.charList[0].x = this._initialX - offset
    }

    updateChar(score) {
        const charList = []
        const scoreStr = score.toString()
        this._adjustStrPosition(scoreStr)
        for (let i = 0; i < scoreStr.length; i++) {
            let c = scoreStr[i]
            let margin = i * this._charWidth
            let paddingForCharOne = 4
            if (c === '1') {
                margin = i * (this._charWidth + paddingForCharOne)
            }
            const char = this._generateChar(c, margin)
            charList.push(char)
        }
        this.charList = charList
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
