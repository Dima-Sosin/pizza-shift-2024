import styles from "./styles.module.css"

export const BtnPrimary = ({ children, onClick }) => (
    <button className={`button ${styles.btn_primary}`} onClick={onClick}>
        {children}
    </button>
)