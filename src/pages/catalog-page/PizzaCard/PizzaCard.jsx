import { useState } from "react"

import { BASE_URL } from "../../../api/api.js"
import { Button } from "../../../components/Button/Button.jsx"
import { PizzaModal } from "../../../components/ModalPizza/ModalPizza.jsx"
import styles from "./PizzaCard.module.css"

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
                <h3>{pizza.name}</h3>
                <p className={styles.description}>{pizza.description}</p>
                <p className={styles.price}>от {pizza.sizes[0].price} ₽</p>
                <Button type="primary">Подробнее</Button>
            </div>
            {isModal && (
                <PizzaModal
                    pizza={pizza}
                    onClose={() => {
                        setIsModal(false)
                        document.body.style.overflow = "unset"
                    }}
                />
            )}
        </>
    )
}
