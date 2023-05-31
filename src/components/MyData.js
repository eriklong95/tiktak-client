import styles from "./mydata.module.css";
import useData from "../hooks/useData";

function MyData(props) {
    // The useData hook GETs the URL passed to it.
    const userData = useData(`/users/${props.username}`); // DONE: insert the appropriate URL

    return (
        <div className={styles.userdatapanel}>
            <h2 className={styles.heading}>Data about me</h2>
            <div className={styles.field}>
                <label>Username</label>
                <input type="text" value={props.username} readOnly className={styles.valuebox}/>
            </div>
            <div className={styles.field}>
                <label>Rank</label>
                <input type="text" value={userData === null ? '' : userData.rank} readOnly className={styles.valuebox}/>
            </div>
        </div>
    );
}

export default MyData;
