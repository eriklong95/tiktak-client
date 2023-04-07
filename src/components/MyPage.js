import MyData from "./MyData";
import MyGames from "./MyGames";
import LogoutButton from "./LogoutButton";

function MyPage(props) {
    
    return (
        <div>
            <MyData user={props.user} />
            <MyGames user={props.user} callServer={props.callServer} host={props.host} />
            <LogoutButton onLogout={props.logout} />
        </div>
    );
}

export default MyPage;
