import styles from "./styles.module.css"
import { useSelector } from "react-redux"
import { selectPizzaOrders } from "../../store/pizzaSlice.js"
import { useContext } from "react"
import { PageContext } from "../../pages/cart-page.jsx"
import { BtnPrimary } from "../buttons/btn-primary.jsx"
import { BASE_URL } from "../../rest-api/index.js"
import { Translation } from "../../translation/index.js"

export const Purchases = () => {
    const pizzas = useSelector(selectPizzaOrders)
    const {setPage} = useContext(PageContext)
    return (
        <>
            <h1>Корзина</h1>
            <ul>
                {pizzas?.map((pizza) => (
                    <div className={styles.pizza} key={pizza.id}>
                        <img
                            className={styles.img}
                            src={BASE_URL + pizza.img}
                            alt="pizza photo"
                        />
                        <p className={styles.name}>{pizza.name}</p>
                        <p className={styles.inf}>
                            {Translation[pizza.size.name]},{" "}
                            {Translation[pizza.doughs.name]} +{" "}
                            {pizza.toppings?.map((el, i) => (
                                <span className={styles.topping} key={i}>
                                    {Translation[el.name]}
                                </span>
                            ))}
                        </p>
                        <div className={styles.quantity}>
                            <button className={styles.btn}>-</button>
                            <p className={styles.num}>1</p>
                            <button className={styles.btn}>+</button>
                        </div>
                        <p className={styles.change}>Изменить</p>
                        <p className={styles.cost}>620 р</p>

                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="transparent"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M21.085 3.53a.75.75 0 0 0-1.06 0l-7.719 7.718-7.71-7.711a.75.75 0 1 0-1.06 1.06l7.71 7.712-7.716 7.716a.75.75 0 1 0 1.061 1.061l7.715-7.717 7.726 7.725a.75.75 0 0 0 1.06-1.06l-7.724-7.725 7.717-7.719a.75.75 0 0 0 0-1.06"
                                fill="currentColor"
                            />
                        </svg>
                    </div>
                ))}
            </ul>

            <div className={styles.line}></div>

            <BtnPrimary onClick={() => setPage("dataEntry")}>
                Оформить заказ
            </BtnPrimary>
        </>
    )
}
