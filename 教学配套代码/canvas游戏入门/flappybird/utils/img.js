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
