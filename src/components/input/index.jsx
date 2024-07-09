import styles from "./styles.module.css"

export const Input = ({ text, type, id, name, placeholder, readOnly = false, defaultValue, register, label, required, error }) => (
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
        <span className={styles.error}>{error}</span>
    </div>
)