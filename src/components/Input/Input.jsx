import styles from "./Input.module.css"

export const Input = ({
    text,
    type,
    id,
    name,
    placeholder,
    readOnly = false,
    defaultValue,
    register,
    label,
    mask,
    required,
    error= ""
}) => {
    const params = mask !== undefined ? [label, mask, required] : [label, required];
    return(
        <div className={styles.container}>
            <label className={styles.label} htmlFor={id}>
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
                {...register(...params)}
            />
            <span className={styles.error}>{error}</span>
        </div>
    )
}