import App from "./App";
import ServerConnectionConfigPanel from "./ServerConnectionConfigPanel";
import StubbingDialog from "./StubbingDialog";

export default function AppContainer() {
    return (
        <>
            <App />
            <ServerConnectionConfigPanel />
            <StubbingDialog />
        </>
    )
}