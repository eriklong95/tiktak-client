import UserData from "./data/UserData";

function MyData(props) {
    const user = props.user;
    return (
        <UserData username={user.username} rank={user.rank} />
    );
}

export default MyData;
