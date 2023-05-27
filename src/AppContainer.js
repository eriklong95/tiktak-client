import { useState } from "react";
import App from "./App";
import StubResponsesConfig from "./components/stubbing/StubResponsesConfig";
import { nanoid } from "nanoid";

const LOGIN_STUB_RESPONSE = {
    id: nanoid(),
    name: 'login',
    onRequest: {
        url: '/users/demouser',
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
        url: '/users',
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
        url: '/games',
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
        url: '/games/a8sfd6sd8afd8s',
        method: 'GET'
    },
    thenRespond: {
        status: 200,
        body: '{"playerA": "demouser", "playerB": "stranger"}'
    }
}

const OTHER_GAME_INFO_STUB_RESPONSE = {
    id: nanoid(),
    name: "get game info 2",
    onRequest: {
        url: '/games/asgd9agd89sgd',
        method: 'GET'
    },
    thenRespond: {
        status: 200,
        body: '{"playerA": "someone", "playerB": "demouser", "status": "ongoing"}'
    }
}

const FRESH_GAMES_STUB_RESPONSE = {
    id: nanoid(),
    name: "get fresh games",
    onRequest: {
        url: "/games?username=demouser",
        method: "GET"
    },
    thenRespond: {
        status: 200,
        body: '["asgd9agd89sgd", "a8sfd6sd8afd8s"]'
    }
}

function AppContainer() {
    const [stubResponses, setStubResponses] = useState(
        [
            LOGIN_STUB_RESPONSE,
            CREATE_USER_STUB_RESPONSE,
            GAMES_STUB_RESPONSE,
            GAME_INFO_STUB_RESPONSE,
            OTHER_GAME_INFO_STUB_RESPONSE,
            FRESH_GAMES_STUB_RESPONSE
        ]
    );
    const [withStubs, setWithStubs] = useState(false);

    function matches(request, stubResponse) {
        const urlMatches = stubResponse.onRequest.url === request.url;
        const httpMethodMatches = request.method === stubResponse.onRequest.method;
        return urlMatches && httpMethodMatches;
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
            <App callServer={callServer} />
            <label htmlFor="stub-responses">Stub server responses</label>
            <input id="stub-responses" checked={withStubs} type="checkbox" onChange={e => setWithStubs(e.target.checked)} />
            <StubResponsesConfig stubResponses={stubResponses} setStubResponses={setStubResponses} />
        </>
    )
}

export default AppContainer;
