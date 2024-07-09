import styles from "./styles.module.css"
import { BASE_URL } from "../../../rest-api/index.js"
import { Button } from "../../../components/button/index.jsx"
import { useState } from "react"
import { PizzaModal } from "../../../components/pizza-modal/pizza-modal.jsx"

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
