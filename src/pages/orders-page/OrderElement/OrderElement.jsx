import styles from "./OrderElement.module.css"

export const OrderElement = ({ order }) => {
    return (
        <div className={styles.order_element}>
            <p className={styles.status}>
                {order.cancellable ? "Заказ доставлен" : "Заказ отменен"}
            </p>
            <p className={styles.address}>
                Россия, г. Томск,
                <br />
                {order.receiverAddress.street}, {order.receiverAddress.house},{" "}
                {order.receiverAddress.apartment}
            </p>
            <p className={styles.composition_order}>
                Название пиццы
                <br />
                Топинги
            </p>
            <a className={styles.details}>Подробнее</a>
        </div>
    )
}