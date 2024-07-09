import React from "react"

import { BASE_URL } from "../../rest-api/index.js"
import { Translation } from "../../translation/index.js"
import styles from "./ToppingCards.module.css"

export const ToppingCards = ({ ingredients, onClick }) => (
    <div className={styles.ingredients}>
        <ul className={styles.cards}>
            {ingredients.map((ingredient, i) => (
                <React.Fragment key={i}>
                    <input
                        className={styles.card_input}
                        type="checkbox"
                        id={ingredient.name}
                        onChange={(event) =>
                            onClick(ingredient.name, event.target.checked)
                        }
                    />
                    <label className={styles.card_label} htmlFor={ingredient.name}>
                        <img
                            className={styles.img}
                            src={BASE_URL + ingredient.img}
                            alt={`Изображение ингредиента ${Translation[ingredient.name]}`}
                        />
                        <p className={styles.name}>{Translation[ingredient.name]}</p>
                        <p className={styles.cost}>{ingredient.cost} ₽</p>
                    </label>
                </React.Fragment>
            ))}
        </ul>
    </div>
)
