import { useContext } from "react"
import { useSelector } from "react-redux"

import { Button } from "../../../components/Button/Button.jsx"
import { selectPizzas } from "../../../store/pizzaSlice.js"
import { PageContext } from "../cart-page.jsx"
import { PizzaElement } from "./PizzaElement.jsx"
import styles from "./ShoppingCart.module.css"

export const ShoppingCart = () => {
    const pizzas = useSelector(selectPizzas)
    const { setStage } = useContext(PageContext)
    let shoppingCost = 0

    const calcCost = (toppings, size, doughs) => {
        let cost = 0
        toppings?.map((topping) => (cost += topping.cost))
        cost += size.price + doughs.price
        shoppingCost += cost
    }

    return (
        <>
            <h2>Корзина</h2>
            <ul>
                {pizzas?.map((pizza, i) => (
                    <li className={styles.li} key={i}>
                        <PizzaElement pizza={pizza} calcCost={calcCost} />
                        {calcCost(pizza.toppings, pizza.size, pizza.doughs)}
                    </li>
                ))}
            </ul>

            <div className={styles.line}></div>

            {pizzas.length !== 0 && (
                <div className={styles.inf}>
                    <div className={styles.purch_cost}>
                        <h2>Стоимость заказа: {shoppingCost} ₽</h2>
                    </div>
                    <Button type="primary" onClick={() => setStage("personalData")}>
                        Оформить заказ
                    </Button>
                </div>
            )}
        </>
    )
}
