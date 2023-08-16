const log = console.log.bind(console)

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function hit(a, b) {
    return a.x + a.w >= b.x &&
        a.x <= b.x + b.w &&
        a.y + a.h >= b.y &&
        a.y <= b.y + b.h;
}
