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

const GAMES_STUB_RESPONSE = {
    id: nanoid(),
    name: "get game ids",
    onRequest: {
        url: '/api/games',
        method: 'GET'
    },
    thenRespond: {
        status: 200,
        body: '["a8sfd6sd8afd8s", "asgd9agd89sgd"]'
    }
}

const GAME_INFO_STUB_RESPONSE = {
    id: nanoid(),
    name: "get game info 1",
    onRequest: {
        url: '/api/games/a8sfd6sd8afd8s',
        method: 'GET'
    },
    thenRespond: {
        status: 200,
        body: '{"playerA": "demouser", "playerB": "stranger", "status": "ongoing"}'
    }
}

const OTHER_GAME_INFO_STUB_RESPONSE = {
    id: nanoid(),
    name: "get game info 2",
    onRequest: {
        url: '/api/games/asgd9agd89sgd',
        method: 'GET'
    },
    thenRespond: {
        status: 200,
        body: '{"playerA": "someone", "playerB": "demouser", "status": "ongoing"}'
    }
}

function AppContainer() {
    const [stubResponses, setStubResponses] = useState(
        [
            LOGIN_STUB_RESPONSE,
            CREATE_USER_STUB_RESPONSE,
            GAMES_STUB_RESPONSE,
            GAME_INFO_STUB_RESPONSE,
            OTHER_GAME_INFO_STUB_RESPONSE
        ]
    );
    const [host, setHost] = useState('http://localhost:5000');
    const [withStubs, setWithStubs] = useState(false);

    function matches(request, stubResponse) {
        return host + stubResponse.onRequest.url === request.url;
    }

    function callServer(request) {
        if (withStubs) {
            const stub = stubResponses.find(s => matches(request, s));
            if (stub === undefined) {
                alert('No stub response for this request! Server will respond with status code 400.')
                return new Promise((resolve, reject) => {
                    resolve(new Response('', { status: 400 }));
                });
            } else {
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
                host={host}
                setHost={setHost}
                setWithStubs={setWithStubs}
                stubResponses={stubResponses}
                setStubResponses={setStubResponses}
            />
        </>
    )
}

export default AppContainer;
