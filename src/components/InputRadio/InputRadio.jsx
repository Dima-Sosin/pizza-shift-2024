import styles from "./InputRadio.module.css"

import { Translation } from "@translation"

export const InputRadio = ({ arr, name, onClick }) => (
    <ul className={styles.arr}>
        {arr.map((el, i) => (
            <li className={styles.el} key={i}>
                <input
                    className={styles.el_input}
                    type="radio"
                    id={el.name}
                    name={name}
                    onChange={() => onClick(el)}
                />
                <label className={styles.el_label} htmlFor={el.name}>
                    {Translation[el.name]}
                </label>
            </li>
        ))}
    </ul>
)
