import { useState } from "react";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";

function Lobby(props) {
    const [status, setStatus] = useState('loggingIn'); // possible values are 'loggingIn', 'signingUp'

    if (status === 'loggingIn') {
        return (
            <LoginPage setLoggedIn={props.setLoggedIn} onClickSignup={() => setStatus('signingUp')} setUser={props.setUser} callServer={props.callServer} />
        );
    } else if (status === 'signingUp') {
        return (
            <SignupPage onClickLogin={() => setStatus('loggingIn')} callServer={props.callServer} />
        );
    }
}

export default Lobby;
