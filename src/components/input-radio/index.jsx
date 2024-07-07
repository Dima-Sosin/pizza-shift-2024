import React from "react"
import styles from "./styles.module.css"
import { Translation } from "../../translation/index.js"

export const InputRadio = ({arr, name, onClick}) => (
    <div className={styles.arr}>
        {arr.map((el, i) => (
            <React.Fragment key={i}>
                <input
                    className={styles.el_input}
                    type="radio"
                    id={el.name}
                    name={name}
                    onChange={() => onClick(el)}
                />
                <label
                    className={styles.el_label}
                    htmlFor={el.name}
                >
                    {Translation[el.name]}
                </label>
            </React.Fragment>
        ))}
    </div>
)