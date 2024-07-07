import styles from "./styles.module.css"

export const Input = ({ text, type, id, name, placeholder, disabled = false, defaultValue, ref }) => {
    return (
        <div className={styles.container}>
            <label
                className={styles.label}
                htmlFor={id}
            >
                {text}
            </label>
            <input
                className={styles.input}
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                disabled={disabled}
                defaultValue={defaultValue}
                ref={ref}
            />
            <span className={styles.error_msg}></span>
        </div>
    )
}