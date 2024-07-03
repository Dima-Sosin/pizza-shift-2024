import styles from "./styles.module.css"
import { Translation } from "../../translation/index.js"

export const InputRadio = ({arr, name}) => {

    return(
        <div className={styles.arr}>
            {arr.map((el) => (
                <>
                    <input
                        className={styles.el_input}
                        type="radio"
                        id={el.name}
                        name={name}
                        onClick={() => {}}
                    />
                    <label
                        className={styles.el_label}
                        htmlFor={el.name}
                    >
                        {Translation(el.name)}
                    </label>
                </>
            ))}
        </div>
    )
}