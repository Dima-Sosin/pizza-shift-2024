import React from "react"
import styles from "./styles.module.css"
import { baseUrl } from "../../rest_api/index.js"
import { Translation } from "../../translation/index.js"

{/* eslint-disable react/prop-types */}
//Компонент вывода карточек топингов для пиццы
export const Ingredients = ({ingredients, onClick}) => {
    return (
        <div className={styles.ingredients}>
            <ul className={styles.cards}>
                {ingredients.map((el, i) => (
                    <React.Fragment key={i}>
                        <input
                            className={styles.card_input}
                            type="checkbox"
                            id={el.name}
                            onChange={(event) => onClick(el.name, event.target.checked)}
                        />
                        <label
                            className={styles.card_label}
                            htmlFor={el.name}
                        >
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
                        </label>
                    </React.Fragment>

                ))}

            </ul>
        </div>
    )
}