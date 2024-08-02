import styles from "./ModalPizza.module.css"

import { useState } from "react"
import { useDispatch } from "react-redux"

import { BASE_URL } from "@api"
import { AttentionIcon } from "@assets/AttentionIcon"
import { Button } from "@components/Button/Button"
import { InputRadio } from "@components/InputRadio/InputRadio"
import { Modal } from "@components/Modal/Modal"
import { ToppingCards } from "@components/ToppingCards/ToppingCards"
import { addPizza } from "@store/pizzaSlice"

export const PizzaModal = ({ pizza, onClose }) => {
    const dispatch = useDispatch()
    const [buyPizza, setBuyPizza] = useState({
        id: pizza.id,
        name: pizza.name,
        count: 1,
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
                            <h2>{pizza.name}</h2>
                            <AttentionIcon />
                            <div className={styles.tooltip}>
                                <p className={styles.tooltip_title}>Пищевая ценность на 100 г:</p>
                                <p>Энерг. ценность: {pizza.calories} ккал</p>
                                <p>Белки: {pizza.protein}</p>
                                <p>Жиры: {pizza.totalFat}</p>
                                <p>Углеводы: {pizza.carbohydrates}</p>
                                <p>Натрий: {pizza.sodium}</p>
                                <ul className={styles.tooltip_allergens}>
                                    Аллергены:{" "}
                                    {pizza.allergens?.map((allergen, i) => (
                                        <li className={styles.li} key={i}>
                                            <span className={styles.allergen}>{allergen}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <p className={styles.p}>{pizza.description}</p>

                        <p className={styles.p}>
                            {pizza.isGlutenFree && (
                                <span className={styles.highlight}>Без глютена</span>
                            )}
                            {pizza.isVegetarian && (
                                <span className={styles.highlight}>Вегетарианская</span>
                            )}
                            {pizza.isHit && <span className={styles.highlight}>Хит продаж</span>}
                            {pizza.isNew && (
                                <span className={styles.highlight}>Новое предложение</span>
                            )}
                        </p>

                        <InputRadio arr={pizza.sizes} name={"sizes"} onClick={sizeChange} />
                        <InputRadio arr={pizza.doughs} name={"doughs"} onClick={doughsChange} />

                        <p className={styles.section_title}>Добавить по вкусу</p>
                        <ToppingCards toppings={pizza.toppings} onClick={addDeleteToppings} />
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
