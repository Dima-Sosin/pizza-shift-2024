import styles from "./PizzaCard.module.css"

import { useState } from "react"

import { BASE_URL } from "@api"
import { Button } from "@components/Button/Button"

import { PizzaModal } from "../ModalPizza/ModalPizza"

export const PizzaCard = ({ pizza }) => {
    const [isModal, setIsModal] = useState(false)

    return (
        <>
            <div className={styles.card} onClick={() => setIsModal(true)}>
                <img
                    className={styles.img}
                    src={BASE_URL + pizza.img}
                    alt={`Изображение пиццы ${pizza.name}`}
                    loading="lazy"
                />
                <div className={styles.inf}>
                    <h3>{pizza.name}</h3>
                    <p className={styles.description}>{pizza.description}</p>
                    <p className={styles.price}>от {pizza.sizes[0].price} ₽</p>
                    <Button className={styles.button} type="primary">
                        Подробнее
                    </Button>
                </div>
            </div>
            <div className={styles.line}></div>
            {isModal && (
                <PizzaModal
                    pizza={pizza}
                    onClose={() => {
                        setIsModal(false)
                        document.body.style.overflowY = "scroll"
                    }}
                />
            )}
        </>
    )
}
