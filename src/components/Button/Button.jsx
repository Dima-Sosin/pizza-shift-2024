import styles from "./Button.module.css"

export const Button = ({ type, className, children, onClick }) => (
    <button className={`button ${styles[type]} ${className}`} onClick={onClick}>
        {children}
    </button>
)
