import styles from "./ShoppingCart.module.css"

import { useState } from "react"
import { useDispatch } from "react-redux"

import { BASE_URL } from "@api"
import { CloseIcon } from "@assets/CloseIcon.jsx"
import { deletePizza } from "@store/pizzaSlice.js"
import { Translation } from "@translation"

export const PizzaElement = ({ pizza }) => {
    const dispatch = useDispatch()
    const [count, setCount] = useState(pizza.count)

    return (
        <>
            <div className={styles.pizza}>
                <img
                    className={styles.img}
                    src={BASE_URL + pizza.img}
                    alt={`Изображение пиццы ${pizza.name}`}
                />
                <div className={styles.pizza_inf}>
                    <p className={styles.name}>{pizza.name}</p>
                    <div className={styles.pizza_structure}>
                        <p>
                            {Translation[pizza.size.name]}, {Translation[pizza.doughs.name]}
                        </p>
                        <ul>
                            {pizza.toppings?.map((topping, i) => (
                                <li key={i}>
                                    <p>+ {Translation[topping.name]}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.active}>
                        <div className={styles.counter}>
                            <button className={styles.btn} onClick={() => setCount(count - 1)}>
                                -
                            </button>
                            <p className={styles.num}>{count}</p>
                            <button className={styles.btn} onClick={() => setCount(count + 1)}>
                                +
                            </button>
                        </div>
                        <p className={styles.change}>Изменить</p>
                        <p className={styles.cost}>
                            {pizza.size.price +
                                pizza.doughs.price +
                                pizza.toppings?.reduce(
                                    (cost, topping) => cost + topping.cost,
                                    0
                                )}{" "}
                            ₽
                        </p>
                        <div className={styles.remove} onClick={() => dispatch(deletePizza(pizza))}>
                            <CloseIcon />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
