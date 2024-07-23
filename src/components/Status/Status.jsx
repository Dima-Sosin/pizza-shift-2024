import { Translation } from "../../translation/index.js"
import styles from "./Status.module.css"

export const Status = ({ status }) => {
    let color = "yellow"
    switch (status) {
        case 3:
            color = "green"
            break
        case 4:
            color = "red"
            break
    }
    return (
        <div className={styles.status}>
            <div className={`${styles.indicator} ${styles[color]}`}></div>
            <p>{Translation[status]}</p>
        </div>
    )
}
