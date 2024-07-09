import styles from "./styles.module.css"
import { useSelector } from "react-redux"
import { selectPizzas } from "../../../store/pizzaSlice.js"
import { useContext } from "react"
import { PageContext } from "../cart-page.jsx"
import { Button } from "../../../components/button/index.jsx"
import { PizzaElement } from "./pizza-element.jsx"

export const Purchases = () => {
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
                            Стоимость заказа: {purchasesCost} р
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
