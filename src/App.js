import MyData from "./components/MyData";
import MyGames from "./components/MyGames";

function App(props) {
    return (
        <div>
            <h1>Welcome to tiktak!</h1>
            <MyData user={props.user}/>
            <MyGames games={props.games} />
        </div>
    );
}

export default App;