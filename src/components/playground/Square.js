function Square(props) {
    return <button className="square">{props.getOccupier(props.x, props.y)}</button>
}

export default Square;