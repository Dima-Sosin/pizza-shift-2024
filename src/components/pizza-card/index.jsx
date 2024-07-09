import styles from "./styles.module.css"
import { BASE_URL } from "../../rest-api/index.js"
import { BtnPrimary } from "../buttons/btn-primary.jsx"
import { useEffect, useState } from "react"
import { PizzaModal } from "../modal/pizza-modal.jsx"

export const PizzaCard = ({ pizza }) => {
    const [isModal, setIsModal] = useState(false)

    return (
        <>
            <div className={styles.card} onClick={() => setIsModal(true)}>
                <img
                    className={styles.img}
                    src={BASE_URL + pizza.img}
                    alt="pizza image"
                    loading="lazy"
                />
                <h3 className={styles.card_title}>{pizza.name}</h3>
                <p className={styles.description}>{pizza.description}</p>
                <p className={styles.price}>от {pizza.sizes[0].price} ₽</p>
                <BtnPrimary>Подробнее</BtnPrimary>
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
