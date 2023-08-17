const singleHit = (a, b) => {
    return a.x + a.w >= b.x &&
        a.x <= b.x + b.w &&
        a.y + a.h >= b.y &&
        a.y <= b.y + b.h;
}

const singleHitMultiple = (a, bs) => {
    for (let i = 0; i < bs.length; i++) {
        if (singleHit(a, bs[i])) {
            return true
        }
    }
    return false
}

const multipleHit = (as, bs) => {
    for (let i = 0; i < as.length; i++) {
        if (singleHitMultiple(as[i], bs)) {
            return true
        }
    }
    return false
}

function hit(a, b) {
    if (Array.isArray(a) && Array.isArray(b)) {
        return multipleHit(a, b)
    } else if (Array.isArray(a)) {
        return singleHitMultiple(b, a)
    } else if (Array.isArray(b)) {
        return singleHitMultiple(a, b)
    }
}
