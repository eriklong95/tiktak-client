import MyData from "./MyData";
import MyGames from "./MyGames";
import LogoutButton from "./LogoutButton";

const GAMES = [
    {
        _id: "0000",
        playerA: "andrew1990",
        playerB: "boris1991"
    },
    {
        _id: "1111",
        playerA: "andrew1990",
        playerB: "charlie1989"
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