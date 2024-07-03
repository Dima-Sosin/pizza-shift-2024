import React from "react"
import styles from "./styles.module.css"
import { baseUrl } from "../../rest_api/index.js"
import { Translation } from "../../translation/index.js"

{/* eslint-disable react/prop-types */}
export const Ingredients = ({ingredients}) => {
    return (
        <div className={styles.ingredients}>
            <ul className={styles.cards}>
                {ingredients.map((el, i) => (
                    <React.Fragment key={i}>
                        <input
                            className={styles.card_input}
                            type="checkbox"
                            id={el.name}
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