import { useState } from "react";

export default function SignupPage(props) {
    const [username, setUsername] = useState('');

    function createUser(e, name) {
        e.preventDefault();
        // ask the server to create user with username='name'
        console.log('Creating user...')
    }

    return (
        <>
            <p>Choose a username</p>
            <form onSubmit={e => createUser(e, username)}>
                <textarea value={username} onChange={e => setUsername(e.target.value)}/>
                <button>Sign up</button>
            </form>
            <p>Already on tiktak?<button onClick={props.onClickLogin}>Log in</button></p>
        </>
    );
}