class Score {
    constructor(x, y, score, assetStore) {
        this._charWidth = 24
        this._score = score
        this._assetStore = assetStore
        this._charList = this._setup(x, y, assetStore)
        this._initialX = x
    }

    _setup(x, y) {
        let charList = []
        const img = this._assetStore.imageByName('0').img
        const char = new GameObject(x, y, img)
        charList.push(char)
        return charList
    }

    _generateChar(char, margin) {
        const img = this._assetStore.imageByName(`${char}`).img

        const firstChar = this._charList[0]
        const x = firstChar.x
        const y = firstChar.y
        return new GameObject(x + margin, y, img)
    }

    _adjustMarginForCharOne(char, margin) {
        const paddingForCharOne = 4
        if (char === '1') {
            margin += paddingForCharOne
        }
        return margin
    }

    _generateStr(scoreStr) {
        const charList = []
        for (let i = 0; i < scoreStr.length; i++) {
            const c = scoreStr[i]
            let margin = i * this._charWidth
            margin = this._adjustMarginForCharOne(c, margin)
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
        this._charList[0].x = this._initialX - offset
    }

    updateChar(score) {
        const scoreStr = score.toString()
        this._adjustStrPosition(scoreStr)
        this._charList = this._generateStr(scoreStr)
    }

    addOnePoint() {
        this._score += 1
        this.updateChar(this._score)
    }

    update() {

    }

    render(ctx) {
        this._charList.forEach((char) => {
            char.render(ctx)
        })
    }
}
