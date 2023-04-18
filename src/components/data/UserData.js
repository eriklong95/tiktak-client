import styles from "./userdata.module.css";

function UserData(props) {
    return (
        <div className={styles.userdatapanel}>
            <h2 className={styles.heading}>Data about me</h2>
            <div className={styles.field}>
                <label>Username</label>
                <input type="text" value="demouser" readOnly className={styles.valuebox}/>
            </div>
            <div className={styles.field}>
                <label>Rank</label>
                <input type="text" value={props.rank} readOnly className={styles.valuebox}/>
            </div>
        </div>
    );
}

export default UserData;
