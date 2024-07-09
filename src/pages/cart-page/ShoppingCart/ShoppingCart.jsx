import { useContext } from "react"
import { useSelector } from "react-redux"

import { Button } from "../../../components/Button/Button.jsx"
import { selectPizzas } from "../../../store/pizzaSlice.js"
import { PageContext } from "../cart-page.jsx"
import { PizzaElement } from "./PizzaElement.jsx"
import styles from "./ShoppingCart.module.css"

export const ShoppingCart = () => {
    const pizzas = useSelector(selectPizzas)
    const {setStage} = useContext(PageContext)

    let purchasesCost = 0

    return (
        <>
            <h1>Корзина</h1>
            <ul>
                {pizzas?.map((pizza, i) => (
                    <li className={styles.li} key={i}>
                        <PizzaElement pizza={pizza}/>
                    </li>
                ))}
            </ul>

            <div className={styles.line}></div>

            {(pizzas.length !== 0) &&
                <div className={styles.inf}>
                    <div className={styles.purch_cost}>
                        <h2>
                            Стоимость заказа: {purchasesCost} ₽
                        </h2>
                    </div>
                    <Button type="primary" onClick={() => setStage("dataEntry")}>
                        Оформить заказ
                    </Button>
                </div>
            }
        </>
    )
}
