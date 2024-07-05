import styles from "./styles.module.css"
import { BtnPrimary } from "../buttons/btn-primary.jsx"
import { useSelector } from "react-redux"

//Компонент вывода пицц лежащих в корзине в корзине
export const Purchases = ({onClick}) => {
    const pizzas = useSelector((state) => state.pizza.pizzaOrders);
    return(
        <>
            <h1>Корзина</h1>
            {console.log(pizzas)}
            <BtnPrimary
                onClick={() => onClick("dataEntry")}
            >

                Оформить заказ
            </BtnPrimary>
        </>
    )
}