function Square(props) {
    function move() {
        props.makeMove(props.x, props.y);
    }

    const occupier = props.getOccupier(props.x, props.y)

    return (
        <button className="square" onClick={move}>
            {occupier}
        </button>
    );
}

export default Square;