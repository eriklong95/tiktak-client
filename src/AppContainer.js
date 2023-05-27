import { useState } from "react";
import App from "./App";
import StubResponsesConfig from "./components/stubbing/StubResponsesConfig";
import { getStubResponses } from "./components/stubbing/stubResponseSupplier";

function AppContainer() {
    const [stubResponses, setStubResponses] = useState(getStubResponses());
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
