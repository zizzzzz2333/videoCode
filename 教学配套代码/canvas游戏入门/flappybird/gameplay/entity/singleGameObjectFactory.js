const createSingleEntity = ({
    entityClass,
    x,
    y,
    img,
    renderer,
}) => {
    const position = new Position(x, y)
    const gameObject = new GameObject(position, img)
    return new entityClass(gameObject, renderer)
}
