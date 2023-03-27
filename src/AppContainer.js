import { useState } from "react";
import App from "./App";
import ServerConnectionConfig from "./ServerConnectionConfig";
import StubbingDialog from "./StubbingDialog";

export default function AppContainer() {
    const [serverConnection, setServerConnection] = useState({ host: 'http://localhost:5000', stubResponses: false });

    return (
        <>
            <App serverConnection={serverConnection}/>
            <ServerConnectionConfig setServerConnection={setServerConnection} />
            <StubbingDialog />
        </>
    )
}