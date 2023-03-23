import { useState } from "react";
import MyData from "./components/MyData";
import MyGames from "./components/MyGames";
import LoginPage from "./components/LoginPage";
import MyPage from "./components/MyPage";

function App(props) {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    function handleLoginAttempt(username) {
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
            <LoginPage onLoginAttempt={handleLoginAttempt} />
        )
    }

}

export default App;