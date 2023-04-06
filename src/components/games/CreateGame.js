function CreateGame(props) {
    const GAME = {
        _id: 'a9s8d3hdasd',
        playerA: props.user,
        playerB: 'random'
    }

    return <button onClick={() => props.addGame(GAME)}>Create a new game!</button>;
}

export default CreateGame;