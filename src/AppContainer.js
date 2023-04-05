import { useState } from "react";
import App from "./App";
import ServerConnectionController from "./components/remote/ServerConnectionController";
import { nanoid } from "nanoid";

const DUMMY_STUB_RESPONSE = { 
    id: nanoid(), 
    onRequest: new Request('http://localhost:5000/api/users'), 
    thenRespond: new Response('', { status: 200 })
};

const OTHER_STUB_RESPONSE = {
    id: nanoid(), 
    onRequest: new Request('http://www.google.com', { method: 'POST' }), 
    thenRespond: new Response('', { status: 400 })
}

function AppContainer() {
    const [stubResponses, setStubResponses] = useState([DUMMY_STUB_RESPONSE, OTHER_STUB_RESPONSE]);

    const initialServerConnection = {
        host: 'http://localhost:5000',
        withStubs: false,
        
        // expects Fetch API Request, returns Promise of Fetch API response
        call: function (request) {
            if (this.withStubs) {
                // find the appropriate stub response in the list stubResponses and return it
                return new Promise((resolve, reject) => {
                    resolve(new Response('body', { status: 400 }));
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
            <ServerConnectionController serverConnection={serverConnection} setServerConnection={setServerConnection} stubResponses={stubResponses} setStubResponses={setStubResponses} />
        </>
    )
}

export default AppContainer;
