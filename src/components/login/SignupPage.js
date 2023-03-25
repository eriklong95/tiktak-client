import { useState } from "react";
import { stubFetch } from "../../util/stub";

export default function SignupPage(props) {
    const [username, setUsername] = useState('');
    const [status, setStatus] = useState('signingUp'); // possible values are 'signingUp', 'success', 'failure'

    function createUser(e, name) {
        e.preventDefault();
        stubFetch(new Request(`http://localhost:5000/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: name
        })).then(response => {
            if (response.ok) {
                setStatus('success');
            } else {
                setStatus('failure');
            }
        }).catch(error => {
            console.log(error);
            alert(error);
            setStatus('failure');
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
                    { status === 'failure' && <p>Sign-up failed. Try again.</p> }
                </form>
                <p>Already on tiktak?<button onClick={props.onClickLogin}>Log in</button></p>
            </>
        );
    }

}