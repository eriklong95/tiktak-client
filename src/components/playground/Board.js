import Square from "./Square";

function Board(props) {

    function getOccupier(x, y) {
        const move = props.moves.find(m => m.x === x && m.y === y);
        if (move === undefined) {
            return '';
        } else {
            return move.occupier;
        }
    }

    return (
        <>
            <div>
                <Square x={0} y={0} getOccupier={getOccupier} makeMove={props.makeMove} />
                <Square x={1} y={0} getOccupier={getOccupier} makeMove={props.makeMove} />
                <Square x={2} y={0} getOccupier={getOccupier} makeMove={props.makeMove} />
            </div>
            <div>
                <Square x={0} y={1} getOccupier={getOccupier} makeMove={props.makeMove} />
                <Square x={1} y={1} getOccupier={getOccupier} makeMove={props.makeMove} />
                <Square x={2} y={1} getOccupier={getOccupier} makeMove={props.makeMove} />
            </div>
            <div>
                <Square x={0} y={2} getOccupier={getOccupier} makeMove={props.makeMove} />
                <Square x={1} y={2} getOccupier={getOccupier} makeMove={props.makeMove} />
                <Square x={2} y={2} getOccupier={getOccupier} makeMove={props.makeMove} />
            </div>
        </>
    );
}

export default Board;