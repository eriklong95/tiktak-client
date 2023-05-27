import { nanoid } from "nanoid";

export function getStubResponses() {
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
    
    return [
        LOGIN_STUB_RESPONSE,
        CREATE_USER_STUB_RESPONSE,
        GAMES_STUB_RESPONSE,
        GAME_INFO_STUB_RESPONSE,
        OTHER_GAME_INFO_STUB_RESPONSE,
        FRESH_GAMES_STUB_RESPONSE
    ]
}