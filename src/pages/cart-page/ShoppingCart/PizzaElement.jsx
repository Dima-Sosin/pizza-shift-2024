import { useState } from "react"
import { useDispatch } from "react-redux"

import { CloseIcon } from "../../../assets/CloseIcon.jsx"
import { BASE_URL } from "../../../rest-api/index.js"
import { deletePizza } from "../../../store/pizzaSlice.js"
import { Translation } from "../../../translation/index.js"
import styles from "./ShoppingCart.module.css"

export const PizzaElement = ({ pizza }) => {
    const dispatch = useDispatch()
    const [count, setCount] = useState(1)

    const calcCost = (toppings, size, doughs, num) => {
        let cost = 0
        toppings?.map((topping) => (cost += topping.cost))
        cost += size.price + doughs.price
        return cost * num
    }

    return (
        <>
            <div className={styles.pizza}>
                <img
                    className={styles.img}
                    src={BASE_URL + pizza.img}
                    alt={`Изображение пиццы ${pizza.name}`}
                />
                <p className={styles.name}>{pizza.name}</p>
                <p className={styles.pizza_inf}>
                    {Translation[pizza.size.name]}, {Translation[pizza.doughs.name]}
                    <ul>
                        {pizza.toppings?.map((topping) => (
                            <li key={topping.name}>
                                <span className={styles.topping}>
                                    + {Translation[topping.name]}
                                </span>
                                <br />
                            </li>
                        ))}
                    </ul>
                </p>
                <div className={styles.quantity}>
                    <button className={styles.btn} onClick={() => setCount(count - 1)}>-</button>
                    <p className={styles.num}>{count}</p>
                    <button className={styles.btn} onClick={() => setCount(count + 1)}>+</button>
                </div>
                <p className={styles.change}>Изменить</p>
                <p className={styles.cost}>
                    {calcCost(pizza.toppings, pizza.size, pizza.doughs, count)} ₽
                </p>
                <div className={styles.remove} onClick={() => dispatch(deletePizza(pizza))}>
                    <CloseIcon />
                </div>
            </div>
        </>
    )
}
