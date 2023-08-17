const loadImage = (src) => {
    return new Promise((resolve, reject) => {
        let img = new Image()
        img.onload = () => resolve(img)
        img.onerror = reject
        img.src = src
    })
}

const loadImages = (srcList) => {
    const loadImageTasks = srcList.map((src) => {
        return loadImage(src)
    })
    return Promise.all(loadImageTasks).catch(err => console.log(err))
}

const entry = async () => {
    const canvas = document.getElementById("id-canvas");
    if (!canvas.getContext) {
        console.log('浏览器不支持canvas')
        return
    }

    const imgsList = [
        {name: '0', src: '../imgs/0.png'},
        {name: '1', src: '../imgs/1.png'},
        {name: '2', src: '../imgs/2.png'},
        {name: '3', src: '../imgs/3.png'},
        {name: '4', src: '../imgs/4.png'},
        {name: '5', src: '../imgs/5.png'},
        {name: '6', src: '../imgs/6.png'},
        {name: '7', src: '../imgs/7.png'},
        {name: '8', src: '../imgs/8.png'},
        {name: '9', src: '../imgs/9.png'},
        {name: 'bg', src: '../imgs/bg.png'},
        {name: 'bird', src: '../imgs/b-01.png'},
        {name: 'ground', src: '../imgs/ground.png'},
        {name: 'pipe', src: '../imgs/pipe.png'},
        {name: 'message', src: '../imgs/message.png'},
        {name: 'gameover', src: '../imgs/gameover.png'},
    ]
    const imgs = await loadImages(imgsList.map(img => img.src))
    const imgNames = imgsList.map(img => img.name)
    const assetStore = new AssetStore(imgs, imgNames)
    const scene = new GameScene([], assetStore)

    const game = new Game(canvas, scene)

    game.runLoop()
}
entry()
