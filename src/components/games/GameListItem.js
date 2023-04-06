function GameListItem(props) {
    return (
        <li>
            <p>{props._id} {props.playerA} {props.playerB}</p>;
        </li>
    );
}

export default GameListItem;