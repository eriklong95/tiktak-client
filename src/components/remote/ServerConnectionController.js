import ServerConnectionConfig from "./ServerConnectionConfig";
import StubResponsesConfig from "./stub/StubResponsesConfig";

function ServerConnectionController(props) {
    return (
        <>
            <ServerConnectionConfig setServerConnection={props.setServerConnection} />
            <StubResponsesConfig stubResponses={props.stubResponses} setStubResponses={props.setStubResponses} />
        </>
    )
}

export default ServerConnectionController;