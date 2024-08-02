import styles from "./ToppingCards.module.css"

import { BASE_URL } from "@api"
import { Translation } from "@translation"

export const ToppingCards = ({ toppings, onClick }) => (
    <div className={styles.ingredients}>
        <ul className={styles.cards}>
            {toppings.map((topping, i) => (
                <li className={styles.card} key={i}>
                    <input
                        type="checkbox"
                        id={topping.name}
                        onChange={(event) => onClick(topping.name, event.target.checked)}
                    />
                    <label htmlFor={topping.name}>
                        <img
                            className={styles.img}
                            src={BASE_URL + topping.img}
                            alt={`Изображение ингредиента ${Translation[topping.name]}`}
                        />
                        <p className={styles.name}>{Translation[topping.name]}</p>
                        <p className={styles.cost}>{topping.cost} ₽</p>
                    </label>
                </li>
            ))}
        </ul>
    </div>
)
