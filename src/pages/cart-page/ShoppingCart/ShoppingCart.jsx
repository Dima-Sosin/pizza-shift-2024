import styles from "./ShoppingCart.module.css"

import { useContext } from "react"
import { useSelector } from "react-redux"

import { Button } from "@components/Button/Button.jsx"
import { selectPizzas } from "@store/pizzaSlice.js"

import { PageContext } from "../cart-page.jsx"

import { PizzaElement } from "./PizzaElement.jsx"

export const ShoppingCart = () => {
    const pizzas = useSelector(selectPizzas)
    const { setStage } = useContext(PageContext)
    let shoppingCost = 0

    const calcCost = (toppings, size, doughs) => {
        shoppingCost +=
            size.price + doughs.price + toppings?.reduce((cost, topping) => cost + topping.cost, 0)
    }

    return (
        <>
            <h1>Корзина</h1>
            {pizzas.length === 0 ? (
                <h2 className={styles.cart_empty}>Корзина пуста</h2>
            ) : (
                <>
                    <ul>
                        {pizzas?.map((pizza, i) => (
                            <li key={i}>
                                <PizzaElement pizza={pizza} />
                                {calcCost(pizza.toppings, pizza.size, pizza.doughs)}
                            </li>
                        ))}
                    </ul>

                    <div className={styles.line}></div>

                    <div className={styles.inf}>
                        <div className={styles.purch_cost}>
                            <h2>Стоимость заказа: {shoppingCost} ₽</h2>
                        </div>
                        <div className={styles.button}>
                            <Button type="primary" onClick={() => setStage("personalData")}>
                                Оформить заказ
                            </Button>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}
