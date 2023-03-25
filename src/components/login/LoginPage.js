import { useState } from "react";
import { stubFetch } from "../../util/stub";

export default function LoginPage(props) {
    const [textInput, setTextInput] = useState('');

    function handleLoginAttempt(event, username, setLoggedIn) {
        event.preventDefault();
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

    return (
        <>
            <h1>Welcome to tiktak!</h1>
            <p>Log in to start playing.</p>
            <form onSubmit={e => handleLoginAttempt(e, textInput, props.setLoggedIn)}>
                <input value={textInput} onChange={e => setTextInput(e.target.value)}/>
                <button>Login</button>
            </form>
            <p>Not on tiktak yet?<button onClick={props.onClickSignup}>Sign up</button></p>
        </>
    );
}