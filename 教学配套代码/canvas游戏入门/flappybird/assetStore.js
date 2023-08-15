class AssetStore {
    constructor(imgs, imgNames) {
        this._imgs = imgs
        this._imgNames = imgNames
        this.setup()
    }

    setup() {
        if (this._imgs.length !== this._imgNames.length) {
            console.log('无法设置图片资源，图片数量和图片名字数量不相等')
        }
        this._imgMap = this._imgs.reduce((result, img, index) => {
            const name = this._imgNames[index]
            result[name] = {
                name,
                img,
            }
            return result
        }, {})
    }

    imageByName(name) {
        return this._imgMap[name]
    }
}
