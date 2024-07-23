import { Translation } from "../../../translation/index.js"
import styles from "./Orders.module.css"

export const OrderElement = ({ order, onClick }) => {
    return (
        <div className={styles.order_element}>
            <p className={styles.status}>{Translation[order.status]}</p>
            <p className={styles.address}>
                Россия, г. Томск,
                <br />
                {order.receiverAddress.street}, {order.receiverAddress.house},{" "}
                {order.receiverAddress.apartment}
            </p>
            <p className={styles.composition_order}>
                Пепперони
                <br />
                Маргарита
            </p>
            <p className={styles.details}>
                <a className={styles.link} onClick={onClick}>
                    Подробнее
                </a>
            </p>
        </div>
    )
}
