import { useState } from "react";

export default function LoginPage(props) {
    const [textInput, setTextInput] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [errorDialogOpen, setErrorDialogOpen] = useState(false);

    async function handleLoginAttempt(event, username, setLoggedIn, setUser) {
        event.preventDefault();
        const request = new Request(`http://localhost:5000/api/users/${username}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
        });

        props.callServer(request).then(response => {
            if (response.ok) {
                setUser(username); // maybe pass response body instead?
                setLoggedIn(true);
            } else {
                setLoggedIn(false);
                setUser('');
                setErrorMessage('Login failed');
                setErrorDialogOpen(true);
            }
        }).catch(error => {
            console.log(error);
            setErrorMessage(error.message);
            setErrorDialogOpen(true);
        });

    }


    return (
        <>
            <h1>Welcome to tiktak!</h1>
            <p>Log in to start playing.</p>
            <form onSubmit={e => handleLoginAttempt(e, textInput, props.setLoggedIn, props.setUser)}>
                <input type="text" value={textInput} onChange={e => setTextInput(e.target.value)} />
                <button>Login</button>
            </form>
            <p>Not on tiktak yet?<button onClick={props.onClickSignup}>Sign up</button></p>
            <dialog open={errorDialogOpen}>
                <p>{errorMessage}</p>
                <button onClick={() => setErrorDialogOpen(false)}>OK</button>
            </dialog>
        </>
    );
}