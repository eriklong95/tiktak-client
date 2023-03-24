import { useState } from "react";

export default function SignupPage(props) {
    const [username, setUsername] = useState('');
    const [status, setStatus] = useState('signingUp'); // possible values are 'signingUp', 'success', 'failure'

    function createUser(e, name) {
        e.preventDefault();
        // ask the server to create user with username='name'
        console.log('Creating user...');
        console.log(`Successfully created user ${name}`);
        setUsername('');
        setStatus('failure');
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
                    { status === 'failure' && <p>Sign-up failed. Try again.</p> }
                </form>
                <p>Already on tiktak?<button onClick={props.onClickLogin}>Log in</button></p>
            </>
        );
    }

}