import styles from "./styles.module.css"
import { baseUrl } from "../../rest_api/index.js"
import { Translation } from "../../translation/index.js"

{/* eslint-disable react/prop-types */}
export const Ingredients = ({ingredients}) => {

    return (
        <div className={styles.toppings}>
            <ul className={styles.cards}>
                {ingredients.map((el, i) => (
                    <li key={i}>
                        <img
                            className={styles.img}
                            src={baseUrl + el.img}
                            alt={el.name}
                        />
                        <p className={styles.name}>
                            {Translation(el.name)}
                        </p>
                        <p className={styles.cost}>
                            {el.cost}  ₽
                        </p>
                    </li>
                ))}

            </ul>
        </div>
    )
}