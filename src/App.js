import { useState } from "react";
import Lobby from "./components/login/Lobby";
import MyPage from "./components/MyPage";
import { stubFetch } from "./util/stub";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    function handleLoginAttempt(username) {
        // set up request object
        const request = new Request(`http://localhost:5000/users/{${username}}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
        })

        stubFetch(request).then(response => {
            if (response.ok) {
                setUser(username);
                setLoggedIn(true);
            } else {
                alert('Login failed');
                setLoggedIn(false);
                setUser('');
            }
        }).catch(error => {
            console.log(error);
            alert(error);
        });
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