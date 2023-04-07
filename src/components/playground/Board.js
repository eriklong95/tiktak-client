import Square from "./Square";

function Board(props) {
    return (
        <>
            <div>
                <Square x={0} y={0} />
                <Square x={1} y={0} />
                <Square x={2} y={0} />
            </div>
            <div>
                <Square x={0} y={1} />
                <Square x={1} y={1} />
                <Square x={2} y={1} />
            </div>
            <div>
                <Square x={0} y={2} />
                <Square x={1} y={2} />
                <Square x={2} y={2} />
            </div>
        </>
    );
}

export default Board;