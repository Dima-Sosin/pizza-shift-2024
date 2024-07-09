import styles from "./ShoppingCart.module.css"
import { BASE_URL } from "../../../rest-api/index.js"
import { Translation } from "../../../translation/index.js"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { deletePizza } from "../../../store/pizzaSlice.js"

export const PizzaElement = ({pizza}) => {
    const dispatch = useDispatch()
    const [count, setCount] = useState(1)

    const CalcCost = (toppings, size, doughs) => {
        let cost = 0
        toppings?.map((topping) => (cost += topping.cost))
        cost += size.price + doughs.price
        return cost
    }

    return(
        <>
            <div className={styles.pizza}>
                <img
                    className={styles.img}
                    src={BASE_URL + pizza.img}
                    alt="pizza photo"
                />
                <p className={styles.name}>{pizza.name}</p>
                <p className={styles.pizza_inf}>
                    {Translation[pizza.size.name]},{" "}
                    {Translation[pizza.doughs.name]} +{" "}
                    {pizza.toppings?.map((topping, i) => (
                        <span className={styles.topping} key={i}>
                                    {Translation[topping.name]}
                                </span>
                    ))}
                </p>
                <div className={styles.quantity}>
                    <button
                        className={styles.btn}
                        onClick={() => setCount(count-1)}
                    >-</button>
                    <p className={styles.num}>
                        {count}
                    </p>
                    <button
                        className={styles.btn}
                        onClick={() => setCount(count+1)}
                    >+</button>
                </div>
                <p className={styles.change}>
                    Изменить
                </p>
                <p className={styles.cost}>
                    {CalcCost(pizza.toppings, pizza.size, pizza.doughs)} р
                </p>
                <div
                    className={styles.remove}
                    onClick={() => dispatch(deletePizza(pizza))}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="transparent" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.085 3.53a.75.75 0 0 0-1.06 0l-7.719 7.718-7.71-7.711a.75.75 0 1 0-1.06 1.06l7.71 7.712-7.716 7.716a.75.75 0 1 0 1.061 1.061l7.715-7.717 7.726 7.725a.75.75 0 0 0 1.06-1.06l-7.724-7.725 7.717-7.719a.75.75 0 0 0 0-1.06" fill="currentColor" />
                    </svg>
                </div>
            </div>
        </>
    )
}