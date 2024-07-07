import styles from "./styles.module.css"

export const BtnDefault = ({ children, onClick }) => (
    <button className={`button ${styles.btn_default}`} onClick={onClick}>
        {children}
    </button>
)