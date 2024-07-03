import styles from "./styles.module.css"
import { Card } from "../card/index.jsx"
import { useEffect } from "react"

{/* eslint-disable react/prop-types */}
export const Cards = ({ pizzas }) => {
    return (
        <>
            <h1>Каталог</h1>
            <ul className={styles.cards}>
                {pizzas.map((pizza) => (
                    <li className={styles.card} key={pizza.id}>
                        <Card pizza={pizza} />
                    </li>
                ))}
            </ul>
        </>
    )
}