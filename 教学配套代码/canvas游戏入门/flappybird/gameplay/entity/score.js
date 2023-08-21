class Score {
    constructor(x, y, score, assetStore, renderer) {
        this._charWidth = 24
        this._score = score
        this._assetStore = assetStore
        this._charList = this._setupCharList(x, y, assetStore)
        this._initialX = x
        this.renderer = renderer
    }

    _setupCharList(x, y) {
        let charList = []
        const img = this._assetStore.imageByName('0').img
        const char = new GameObject(new Position(x, y), img)
        charList.push(char)
        return charList
    }

    addOnePoint() {
        this._score += 1
        this.updateChar(this._score)
    }

    updateChar(score) {
        const scoreStr = score.toString()
        this._adjustFirstCharPosition(scoreStr)
        this._charList = this._generateStr(scoreStr)
    }

    _adjustFirstCharPosition(scoreStr) {
        const length = scoreStr.length
        const offsetCount = (length - 1)
        const offsetUnit = this._charWidth / 2
        const offset = offsetCount * offsetUnit
        this._firstCharMoveLeft(offset)
    }

    _firstCharMoveLeft(offset) {
        this._charList[0].x = this._initialX - offset
    }

    _generateStr(scoreStr) {
        const charList = []
        for (let i = 0; i < scoreStr.length; i++) {
            const c = scoreStr[i]
            let margin = i * this._charWidth
            margin = this._adjustMarginForCharOne(c, margin)
            const char = this._getCharBasedOnFirstCharPosition(c, margin)
            charList.push(char)
        }
        return charList
    }

    _adjustMarginForCharOne(char, margin) {
        const paddingForCharOne = 4
        if (char === '1') {
            margin += paddingForCharOne
        }
        return margin
    }

    _getCharBasedOnFirstCharPosition(char, margin) {
        const img = this._assetStore.imageByName(`${char}`).img

        const firstChar = this._charList[0]
        const x = firstChar.x
        const y = firstChar.y
        return new GameObject(new Position(x + margin, y), img)
    }

    update() {

    }

    render() {
        this._charList.forEach((char) => {
            this.renderer.render(char)
        })
    }
}
