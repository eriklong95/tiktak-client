import { useState } from "react";
import App from "./App";
import ServerConnectionController from "./components/remote/ServerConnectionController";

function AppContainer() {
    const [stubResponses, setStubResponses] = useState([0, 0, 0]);

    const initialServerConnection = {
        host: 'http://localhost:5000',
        stubResponses: false,
        
        // expects Fetch API Request, returns Promise of Fetch API response
        call: function (request) {
            if (this.stubResponses) {
                // find the appropriate stub response in the list stubResponses and return it
                return new Promise((resolve, reject) => {
                    resolve(new Response('body', { status: 404 }));
                });
            } else {
                return fetch(request);
            }
        }
        
    };
    const [serverConnection, setServerConnection] = useState(initialServerConnection);

    return (
        <>
            <App serverConnection={serverConnection} />
            <ServerConnectionController setServerConnection={setServerConnection} stubResponses={stubResponses} setStubResponses={setStubResponses} />
        </>
    )
}

export default AppContainer;
