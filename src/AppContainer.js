import App from "./App";

function AppContainer() {

    function callServer(request) {
        return fetch(request);
    }

    return (
        <>
            <App callServer={callServer} />
        </>
    )
}

export default AppContainer;
