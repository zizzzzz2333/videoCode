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
    }

    const imgsList = [
        {name: '0', src: './imgs/0.png'},
        {name: 'bg', src: './imgs/bg.png'},
        {name: 'bird', src: './imgs/b-01.png'},
        {name: 'ground', src: './imgs/ground.png'},
        {name: 'pipe', src: './imgs/pipe.png'},
    ]
    const imgs = await loadImages(imgsList.map(img => img.src))
    const imgNames = imgsList.map(img => img.name)
    const assetStore = new AssetStore(imgs, imgNames)

    const bgImg = assetStore.imageByName('bg')
    const background = new Background(0, 0, bgImg.img)

    const birdImg = assetStore.imageByName('bird')
    const bird = new Bird(100, 100, birdImg.img, 3)

    const pipeImg = assetStore.imageByName('pipe')
    const pipe = new Pipe(0, 0, pipeImg.img)

    const groundImg = assetStore.imageByName('ground')
    const ground = new Ground(0, 440, groundImg.img)

    const gameObjects = [background, pipe, ground, bird]
    const game = new Game(canvas, gameObjects, assetStore)

    game.runLoop()
}
entry()
