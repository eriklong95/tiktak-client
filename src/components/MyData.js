import UserData from "./data/UserData";

function MyData(props) {
    const user = props.user;
    return (
        <div>
            <p>Data about me</p>
            <UserData username={user.username} rank={user.rank}/>
        </div>
    );
}

export default MyData;