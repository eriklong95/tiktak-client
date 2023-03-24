import { useState } from "react";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";

export default function Lobby(props) {
    // status can be 'loggingIn', 'signingUp'
    const [status, setStatus] = useState('loggingIn');

    if (status === 'loggingIn') {
        return (
            <LoginPage onLoginAttempt={props.onLoginAttempt} onClickSignup={() => setStatus('signingUp')} />
        );
    } else if (status === 'signingUp') {
        return (
            <SignupPage onClickLogin={() => setStatus('loggingIn')} />
        );
    }
}