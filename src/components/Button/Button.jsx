import styles from "./Button.module.css"

export const Button = ({ type, className, children, onClick }) => (
    <button className={`${styles.button} ${styles[type]} ${className}`} onClick={onClick}>
        {children}
    </button>
)
