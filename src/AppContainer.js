import { useState } from "react";
import App from "./App";
import ServerConnectionConfig from "./ServerConnectionConfig";
import StubbingDialog from "./StubbingDialog";

export default function AppContainer() {
    const [serverConnection, setServerConnection] = useState(initialServerConnection);

    return (
        <>
            <App serverConnection={serverConnection}/>
            <ServerConnectionConfig setServerConnection={setServerConnection} />
            <StubbingDialog />
        </>
    )
}

const initialServerConnection = {
    host: 'http://localhost:5000',
    stubResponses: false,

    // expects Fetch API Request, returns Promise of Fetch API response
    call: function(request) {
        if (this.stubResponses) {
            return stubFetch(request)
        } else {
            return fetch(request);
        }
    }
}

function stubFetch(request) {
    return new Promise((resolve, reject) => {
        reject('Network error');
    })
}