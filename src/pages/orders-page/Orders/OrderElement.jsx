import styles from "./Orders.module.css"

import { Status } from "@components/Status/Status"

export const OrderElement = ({ order, onClick }) => {
    return (
        <>
            <div className={styles.line}></div>
            <div className={styles.order_element}>
                <div className={styles.status}>
                    <p className={styles.title_mobile}>Статус</p>
                    <Status status={order.status} />
                </div>
                <div className={styles.address}>
                    <p className={styles.title_mobile}>Адрес</p>
                    <p>Россия, г. Томск,</p>
                    <p>
                        {order.receiverAddress.street}, {order.receiverAddress.house},{" "}
                        {order.receiverAddress.apartment}
                    </p>
                </div>
                <div className={styles.composition_order}>
                    <p className={styles.title_mobile}>Состав заказа</p>
                    <p>Пепперони</p>
                    <p>Маргарита</p>
                </div>
                <div className={styles.details}>
                    <a className={styles.link} onClick={onClick}>
                        Подробнее
                    </a>
                </div>
            </div>
        </>
    )
}
