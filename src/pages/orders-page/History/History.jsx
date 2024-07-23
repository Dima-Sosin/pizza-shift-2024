import { useContext, useEffect, useState } from "react"

import { api } from "../../../api/api.js"
import { Button } from "../../../components/Button/Button.jsx"
import { Translation } from "../../../translation/index.js"
import { PageContext } from "../orders-page.jsx"
import styles from "./History.module.css"

export const History = ({ orderId }) => {
    const [order, setOrder] = useState({})
    const { setStage } = useContext(PageContext)
    const [isLoad, setIsLoad] = useState(false)
    useEffect(() => {
        api.get(`/pizza/orders/${orderId}`, {}, localStorage.getItem("token")).then((data) => {
            setOrder(data.order)
            setIsLoad(true)
        })
    }, [])
    return (
        isLoad && (
            <>
                <h1>История</h1>
                <div className={styles.order}>
                    <div className={styles.block}>
                        <p className={styles.title}>Статус</p>
                        <div className={styles.light}></div>
                        <p>{Translation[order.status]}</p>
                    </div>

                    <div className={styles.block}>
                        <p className={styles.title}>Адрес доставки</p>
                        Россия, г. Томск, {order.receiverAddress.street},{" "}
                        {order.receiverAddress.house}, {order.receiverAddress.apartment}
                    </div>

                    <div className={styles.block}>
                        <p className={styles.title}>Состав заказа</p>
                        <p>Пепперони, Большая 35см, Традиционное тесто </p>
                        <p>+ Сочные ананасы</p>
                        <p>+ Сладкий перец</p>
                        <p>+ Нежный цыпленок</p>
                        <p>+ Пикантная пепперони</p>
                        <p>Маргарита, Средняя 30см, Тонкое тесто </p>
                    </div>

                    <div className={styles.block}>
                        <p className={styles.title}>Сумма заказа</p>
                        <p>2395 ₽</p>
                    </div>
                    <div className={styles.buttons}>
                        <Button type="default" onClick={() => setStage("orders")}>
                            Назад
                        </Button>
                        {order.cancellable && (
                            <Button
                                type="primary"
                                onClick={() => {
                                    api.put(
                                        "/pizza/orders/cancel",
                                        { orderId: order._id },
                                        localStorage.getItem("token")
                                    ).then((result) => result)
                                }}
                            >
                                Отменить
                            </Button>
                        )}
                    </div>
                </div>
            </>
        )
    )
}
