import MyData from "./MyData";
import MyGames from "./MyGames";
import LogoutButton from "./LogoutButton";
import Playground from "./playground/Playground";
import { useState } from "react";

export default function MyPage(props) {
    const [userMode, setUserMode] = useState('browsing') // possible values: 'browsing', 'playing'
    const [activeGameId, setActiveGameId] = useState(null);
    
    if (userMode === 'browsing') {
        return (
            <>
                <MyData user={props.user}/>
                <MyGames user={props.user} setUserMode={setUserMode} setActiveGameId={setActiveGameId} />
                <LogoutButton onLogout={props.logout} />
            </>
        );
    } else {
        return (
            <Playground setUserMode={setUserMode} gameId={activeGameId} user={props.user}/>
        );
    }
}