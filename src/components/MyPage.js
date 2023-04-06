import MyData from "./MyData";
import MyGames from "./MyGames";
import LogoutButton from "./LogoutButton";

export default function MyPage(props) {
    
    return (
        <div>
            <MyData user={props.user} />
            <MyGames user={props.user} />
            <LogoutButton onLogout={props.logout} />
        </div>
    );
}