import { useState } from "react";

export default function LoginPage(props) {
    const [textInput, setTextInput] = useState('');

    function handleTextareaChange(e) {
        setTextInput(e.target.value);
    }

    return (
        <>
            <h1>Welcome to tiktak!</h1>
            <p>Log in to start playing.</p>
            <form onSubmit={() => props.onLoginAttempt(textInput)}>
                <textarea value={textInput} onChange={handleTextareaChange}/>
                <button>Login</button>
            </form>
            <p>Not on tiktak yet?<button onClick={props.onClickSignup}>Sign up</button></p>
        </>
    );
}