import { useState } from "react"
import { useDispatch } from "react-redux"

import { BASE_URL } from "../../rest-api/index.js"
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
                        <h2 className={styles.modal_title}>
                            {pizza.name}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
                                <path fill="#000" fillRule="evenodd" d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" />
                                <path fill="#000" d="M12 11a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1" />
                                <path fill="#000" d="M13.5 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                            </svg>
                            <span className={styles.tooltip}>
                                <span className={styles.tooltip_title}>
                                    Пищевая ценность на 100 г:
                                </span>
                                <br />
                                Энерг. ценность: {pizza.calories} ккал
                                <br />
                                Белки: {pizza.protein}
                                <br />
                                Жиры: {pizza.totalFat}
                                <br />
                                Углеводы: {pizza.carbohydrates}
                                <br />
                                <br />
                                Вес: {pizza.sodium}
                            </span>
                        </h2>

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
                            ingredients={pizza.toppings}
                            onClick={addDeleteToppings}
                        />
                    </div>

                    <Button type="primary"
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