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
    const [host, setHost] = useState('http://localhost:5000');
    const [withStubs, setWithStubs] = useState(true);

    function callServer(request) {
        if (withStubs) {
            const stub = stubResponses.find(r => r.onRequest.url === request.url);
            if (stub === undefined) {
                return new Promise((resolve, reject) => {
                    resolve(new Response('', { status: 400 }));
                })
            } else {
                const response = stub.thenRespond;
                return new Promise((resolve, reject) => {
                    resolve(response);
                });
            }
        } else {
            return fetch(request);
        }
    }

    return (
        <>
            <App callServer={callServer} />
            <ServerConnectionController
                withStubs={withStubs}
                setHost={setHost}
                setWithStubs={setWithStubs}
                stubResponses={stubResponses}
                setStubResponses={setStubResponses}
            />
        </>
    )
}

export default AppContainer;
