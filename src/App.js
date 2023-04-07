import { useState } from "react";
import Lobby from "./components/login/Lobby";
import MyPage from "./components/MyPage";

function App(props) {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    if (loggedIn) {
        return (
            <MyPage user={user} logout={() => setLoggedIn(false)} callServer={props.callServer} host={props.host} />
        );
    } else {
        return (
            <Lobby setLoggedIn={setLoggedIn} setUser={setUser} callServer={props.callServer} />
        )
    }

}

export default App;