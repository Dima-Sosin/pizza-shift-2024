import styles from "./styles.module.css"

export const Button = ({ children, onClick }) => (
    <button className={styles.button} onClick={onClick}>
        {children}
    </button>
)