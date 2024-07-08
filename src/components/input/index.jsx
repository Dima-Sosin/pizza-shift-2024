import styles from "./styles.module.css"

export const Input = ({ text, type, id, name, placeholder, readOnly = false, defaultValue, register, label, required, errorMsg }) => {
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
                readOnly={readOnly}
                defaultValue={defaultValue}
                {...register(label, required)}
            />
            <span className={styles.error_msg}>{errorMsg}</span>
        </div>
    )
}