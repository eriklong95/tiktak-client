function Playground(props) {
    // should receive game ID in props
    // then sync data to get game data

    return (
        <>
            <p>If you wanna play, you've come to the right place!</p>
            <p>Game ID: {props.gameId}</p>
            <button onClick={() => props.setUserMode('browsing')}>Return to my page</button>
        </>
    );
}

export default Playground;