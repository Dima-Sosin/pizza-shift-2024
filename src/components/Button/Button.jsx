import styles from "./Button.module.css"

export const Button = ({ type, children, onClick }) => (
    <button className={`button ${styles[type]}`} onClick={onClick}>
        {children}
    </button>
)