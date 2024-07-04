import styles from "./styles.module.css"

//Компонент input
export const Input = ({ text, type, id, name, placeholder, disabled = false, defaultValue, onChange}) => {
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
                onChange={onChange}
            />
        </div>
    )
}