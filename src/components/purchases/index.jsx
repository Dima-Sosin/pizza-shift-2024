import styles from "./styles.module.css"
import { BtnPrimary } from "../buttons/btn-primary.jsx"

//Компонент вывода пицц лежащих в корзине в корзине
export const Purchases = ({onClick}) => {

    return(
        <>
            <h1>Корзина</h1>
            <div className={styles.block}></div>

            <BtnPrimary
                onClick={() => onClick("dataEntry")}
            >
                Оформить заказ
            </BtnPrimary>
        </>
    )
}