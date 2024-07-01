import styles from "./styles.module.css"
import { baseUrl } from "../../rest/index.js"
import { Button } from "../button/index.jsx"

export const Card = ({pizza}) => {

    return(
        <div className={styles.card}>
            <img className={styles.img} src={baseUrl + pizza.img} alt="poster" loading="lazy"/>
            <h3 className={styles.title}>{pizza.name}</h3>
            <p className={styles.description}>{pizza.description}</p>
            <p className={styles.price}>от {pizza.sizes[0].price} ₽</p>
            <Button>Подробнее</Button>
        </div>
    )
}