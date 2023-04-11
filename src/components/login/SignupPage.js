import { useState } from "react";

function SignupPage(props) {
    const [username, setUsername] = useState('');
    const [status, setStatus] = useState('signingUp'); // possible values are 'signingUp', 'success', 'failure'
    const [errorMessage, setErrorMessage] = useState('');

    function createUser(event, name) {
        event.preventDefault();
        props.callServer(new Request(`${props.host}/api/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: name
        })).then(response => {
            if (response.ok) {
                setStatus('success');
            } else if (response.status === 403){
                setUsername('');
                setStatus('failure');
                setErrorMessage('Username already taken');
            } else {
                setUsername('');
                setStatus('failure');
                setErrorMessage('Unknown error');
            }
        }).catch(error => {
            console.log(error);
            setStatus('failure');
            setErrorMessage(error.message);
        });
    }

    if (status === 'success') {
        return (
            <>
                <p>You are now signed up, '{username}'. Welcome on board!</p>
                <button onClick={props.onClickLogin}>Go to login page</button>
            </>
        );
    } else {
        return (
            <>
                <p>Choose a username</p>
                <form onSubmit={e => createUser(e, username)}>
                    <input value={username} onChange={e => {setUsername(e.target.value); setStatus('signingUp');}} />
                    <button>Sign up</button>
                </form>
                <p>Already on tiktak?<button onClick={props.onClickLogin}>Log in</button></p>
                <dialog open={status === 'failure'}>
                    <p>{errorMessage}</p>
                    <button onClick={() => setStatus('signingUp')}>OK</button>
                </dialog>
            </>
        );
    }

}

export default SignupPage;
