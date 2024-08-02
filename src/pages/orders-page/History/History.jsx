import styles from "./History.module.css"

import { useContext, useEffect, useState } from "react"

import { api } from "@api"
import { QuestionIcon } from "@assets/QuestionIcon.jsx"
import { Button } from "@components/Button/Button.jsx"
import { Modal } from "@components/Modal/Modal.jsx"
import { Status } from "@components/Status/Status.jsx"

import { PageContext } from "../orders-page.jsx"

export const History = ({ orderId }) => {
    const [order, setOrder] = useState({})
    const { setStage } = useContext(PageContext)
    const [isModal, setIsModal] = useState(false)
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
                        <Status status={order.status} />
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
                            <Button type="primary" onClick={() => setIsModal(true)}>
                                Отменить
                            </Button>
                        )}
                    </div>
                </div>
                {isModal && (
                    <Modal onClose={() => setIsModal(false)}>
                        <div className={styles.modal_title}>
                            <QuestionIcon />
                            <h3>Отменить заказ?</h3>
                        </div>
                        <div className={styles.modal_buttons}>
                            <Button
                                type="default"
                                onClick={() => {
                                    api.put(
                                        "/pizza/orders/cancel",
                                        { orderId: order._id },
                                        localStorage.getItem("token")
                                    ).then((result) => result)
                                    setIsModal(false)
                                }}
                            >
                                Отменить
                            </Button>
                            <Button type="primary" onClick={() => setIsModal(false)}>
                                Не отменять
                            </Button>
                        </div>
                    </Modal>
                )}
            </>
        )
    )
}
