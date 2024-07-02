import styles from "./styles.module.css"
import { baseUrl } from "../../rest/index.js"

export const Toppings = ({toppings}) => {

    return(
        <div className={styles.toppings}>
            <ul className={styles.cards}>
                {toppings.map((el, i) => (
                    <li key={i}>
                        <img className={styles.img} src={baseUrl + el.img} alt={el.name}/>
                        <p className={styles.name}>{el.name}</p>
                        <p className={styles.cost}>{el.cost}  ₽</p>
                    </li>
                ))}

            </ul>
        </div>
    )
}