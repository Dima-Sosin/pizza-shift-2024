import { useState } from "react"
import { useDispatch } from "react-redux"

import { BASE_URL } from "../../api/index.js"
import { AttentionIcon } from "../../assets/AttentionIcon.jsx"
import { addPizza } from "../../store/pizzaSlice.js"
import { Button } from "../Button/Button.jsx"
import { InputRadio } from "../InputRadio/InputRadio.jsx"
import { Modal } from "../Modal/Modal.jsx"
import { ToppingCards } from "../ToppingCards/ToppingCards.jsx"
import styles from "./ModalPizza.module.css"

export const PizzaModal = ({ pizza, onClose }) => {
    const dispatch = useDispatch()
    const [buyPizza, setBuyPizza] = useState({
        id: pizza.id,
        name: pizza.name,
        toppings: [],
        img: pizza.img,
        description: pizza.description,
        size: {
            name: pizza.sizes[1].name,
            price: pizza.sizes[1].price
        },
        doughs: {
            name: pizza.doughs[1].name,
            price: pizza.doughs[1].price
        }
    })
    const sizeChange = (el) => {
        setBuyPizza((prevState) => ({
            ...prevState,
            size: el
        }))
    }
    const doughsChange = (el) => {
        setBuyPizza((prevState) => ({
            ...prevState,
            doughs: el
        }))
    }
    const addDeleteToppings = (name, isAdd) => {
        if (isAdd) {
            pizza.toppings.map((el) => {
                if (el.name === name) {
                    setBuyPizza((prevState) => ({
                        ...prevState,
                        toppings: [...prevState.toppings, el]
                    }))
                }
            })
        } else {
            setBuyPizza((prevState) => ({
                ...prevState,
                toppings: prevState.toppings.filter((el) => el.name !== name)
            }))
        }
    }
    return (
        <Modal onClose={onClose}>
            <div className={styles.pizza_modal}>
                <img
                    className={styles.img}
                    src={BASE_URL + pizza.img}
                    alt={`Изображение пиццы ${pizza.name}`}
                />
                <div className={styles.right}>
                    <div className={styles.info}>
                        <div className={styles.modal_title}>
                            <h2>{pizza.name}</h2><AttentionIcon />
                            <p className={styles.tooltip}>
                                <span className={styles.tooltip_title}>
                                    Пищевая ценность на 100 г:
                                </span>
                                <br />
                                <span>Энерг. ценность: {pizza.calories} ккал</span>
                                <br />
                                <span>Белки: {pizza.protein}</span>
                                <br />
                                <span>Жиры: {pizza.totalFat}</span>
                                <br />
                                <span>Углеводы: {pizza.carbohydrates}</span>
                                <br />
                                <span>Натрий: {pizza.sodium}</span>
                                <br />
                                <span className={styles.tooltip_allergens}>Аллергены: </span>
                                {pizza.allergens?.map((allergen, i) =>
                                    (<span className={styles.allergen} key={i}>{allergen} </span>)
                                )}
                            </p>
                        </div>

                        <p className={styles.p}>{pizza.description}</p>

                        <p className={styles.p}>
                            {pizza.isGlutenFree && (
                                <span className={styles.highlight}>
                                    Без глютена
                                </span>
                            )}
                            {pizza.isVegetarian && (
                                <span className={styles.highlight}>
                                    Вегетарианская
                                </span>
                            )}
                            {pizza.isHit && (
                                <span className={styles.highlight}>
                                    Хит продаж
                                </span>
                            )}
                            {pizza.isNew && (
                                <span className={styles.highlight}>
                                    Новое предложение
                                </span>
                            )}
                        </p>

                        <p className={styles.p}>
                            <InputRadio
                                arr={pizza.sizes}
                                name={"sizes"}
                                onClick={sizeChange}
                            />
                            <InputRadio
                                arr={pizza.doughs}
                                name={"doughs"}
                                onClick={doughsChange}
                            />
                        </p>

                        <p className={styles.section_title}>
                            Добавить по вкусу
                        </p>
                        <ToppingCards
                            toppings={pizza.toppings}
                            onClick={addDeleteToppings}
                        />
                    </div>

                    <Button
                        type="primary"
                        onClick={() => {
                            dispatch(addPizza(buyPizza))
                            onClose()
                        }}
                    >
                        Добавить в корзину
                    </Button>
                </div>
            </div>
        </Modal>
    )
}
