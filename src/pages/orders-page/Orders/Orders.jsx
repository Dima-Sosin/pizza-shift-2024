import styles from "./Orders.module.css"

import { useContext } from "react"
import { useLoaderData } from "react-router-dom"

import { IdContext, PageContext } from "../orders-page"

import { OrderElement } from "./OrderElement"

export const Orders = () => {
    const data = useLoaderData()
    const { setStage } = useContext(PageContext)
    const { setId } = useContext(IdContext)
    return (
        <>
            <h1>Заказы</h1>
            {data.success && (
                <>
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
                        {data.orders?.map((order) => (
                            <li key={order._id}>
                                <OrderElement
                                    order={order}
                                    onClick={() => {
                                        setId(order._id)
                                        setStage("history")
                                    }}
                                />
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </>
    )
}
