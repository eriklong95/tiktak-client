import { useState } from "react";
import Lobby from "./components/login/Lobby";
import MyPage from "./components/MyPage";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    async function handleLoginAttempt(username) {
        // should ask the server if user is known
        if (username === 'demouser') {
            setUser({ username, rank: 0 });
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
    }

    function handleLogout() {
        setLoggedIn(false);
    }

    if (loggedIn) {
        return (
            <MyPage user={user} onLogout={handleLogout} />
        );
    } else {
        return (
            <Lobby onLoginAttempt={handleLoginAttempt} />
        )
    }

}

export default App;