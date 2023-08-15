const canvas = document.getElementById("id-canvas");
if (!canvas.getContext) {
    console.log('浏览器不支持canvas')
}

const ctx = canvas.getContext("2d");

let x = 100
let y = 100
let xSpeed = 1

let moveRight = false
let moveLeft = false

const addEvents = () => {
    document.addEventListener('keydown', (event) => {
        if(event.key === 'd')  {
            moveRight = true
        }
        if(event.key === 'a')  {
            moveLeft = true
        }
    })

    document.addEventListener('keyup', (event) => {
        if(event.key === 'd')  {
            moveRight = false
        }
        if(event.key === 'a')  {
            moveLeft = false
        }
    })
}
addEvents()


const renderLoop = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if (moveRight) {
        x += xSpeed
    }
    if (moveLeft) {
        x -= xSpeed
    }

    ctx.fillRect(x, y, 150, 100);
    requestAnimationFrame(renderLoop)
}
requestAnimationFrame(renderLoop)



