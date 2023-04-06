function CreateGame(props) {
    const GAME = {
        _id: 'a9s8d3hdasd',
        playerA: props.user,
        playerB: 'random'
    }

    function handleCreate() {
        // open dialog
        // receive form data and make game
        const game = {};
        createGame(game);
    }

    function createGame(game) {
        // POST game on server
    }

    // when button clicked, open dialog, set up game and give it to the server
    return <button onClick={handleCreate}>Create a new game!</button>;
}

export default CreateGame;