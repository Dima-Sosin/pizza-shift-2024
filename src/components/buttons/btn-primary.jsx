import styles from "./styles.module.css"

//Компонент кнопки
export const BtnPrimary = ({ type, children, onClick }) => (
    <button className={`button ${styles.btn_primary}`} onClick={onClick}>
        {children}
    </button>
)