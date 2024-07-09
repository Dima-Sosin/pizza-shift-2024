import { useLoaderData } from "react-router-dom"

import { OrderElement } from "./OrderElement/OrderElement.jsx"
import styles from "./OrderElement/OrderElement.module.css"

export const OrdersPage = () => {
    const orders = useLoaderData().orders
    console.log(orders)
    return (
        <div className="page">
            <div className="container">
                <h1>Заказы</h1>
                <div className={styles.head}>
                    <p className={styles.head_span}>Статус</p>
                    <p className={styles.head_span}>Адрес доставки</p>
                    <p className={styles.head_span}>Состав заказа</p>
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
