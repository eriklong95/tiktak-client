import MyData from "./MyData";
import MyGames from "./MyGames";
import LogoutButton from "./LogoutButton";

const GAMES = [
    {
        _id: "0000",
        playerA: "demouser",
        playerB: "otherUser"
    },
    {
        _id: "1111",
        playerA: "demouser",
        playerB: "yetAnotherUser"
    }
]

export default function MyPage(props) {
    
    return (
        <div>
            <MyData user={props.user}/>
            <MyGames games={GAMES} />
            <LogoutButton onLogout={props.onLogout} />
        </div>
    );
}