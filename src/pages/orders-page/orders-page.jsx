import { useLoaderData } from "react-router-dom"

import { OrderElement } from "./OrderElement/OrderElement.jsx"
import styles from "./OrderElement/OrderElement.module.css"

export const OrdersPage = () => {
    const orders = useLoaderData().orders
    return (
        <div className="page">
            <div className="container">
                <h2>Заказы</h2>
                <div className={styles.head}>
                    <div className={styles.status}>
                        <p>Статус</p>
                    </div>
                    <div className={styles.address}>
                        <p>Адрес доставки</p>
                    </div>
                    <div className={styles.composition_order}>
                        <p>Состав заказа</p>
                    </div>
                </div>
                <div className={styles.line}></div>
                <ul>
                    {orders?.map((order, i) => (
                        <li className={styles.li} key={i}>
                            <OrderElement order={order} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
