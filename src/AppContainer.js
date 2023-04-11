import { useState } from "react";
import App from "./App";
import ServerConnectionController from "./components/remote/ServerConnectionController";
import { nanoid } from "nanoid";

const LOGIN_STUB_RESPONSE = {
    id: nanoid(),
    name: 'login',
    onRequest: {
        url: '/api/users/demouser',
        method: 'GET',
        body: ''
    },
    thenRespond: {
        status: 200,
        body: '{"username": "demouser", "rank": 88}'
    }
};

const CREATE_USER_STUB_RESPONSE = {
    id: nanoid(),
    name: "create user",
    onRequest: {
        url: '/api/users',
        method: 'POST',
        body: '"myUsername"'
    },
    thenRespond: {
        status: 201,
        body: '{"username": "myUsername", "rank": 0}'
    }
}

function AppContainer() {
    const [stubResponses, setStubResponses] = useState([LOGIN_STUB_RESPONSE, CREATE_USER_STUB_RESPONSE]);
    const [host, setHost] = useState('');
    const [withStubs, setWithStubs] = useState(false);

    function matches(request, stubResponse) {
        return host + stubResponse.onRequest.url === request.url;
    }

    function callServer(request) {
        console.log(request);
        if (withStubs) {
            const stub = stubResponses.find(s => matches(request, s));
            if (stub === undefined) {
                alert('No stub response for this request! Server will respond with status code 400.')
                return new Promise((resolve, reject) => {
                    resolve(new Response('', { status: 400 }));
                });
            } else {
                console.log(stub.thenRespond);
                return new Promise((resolve, reject) => {
                    const response = new Response(stub.thenRespond.body, { status: stub.thenRespond.status });
                    resolve(response);
                });
            }
        } else {
            return fetch(request);
        }
    }

    return (
        <>
            <App callServer={callServer} host={host} />
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
