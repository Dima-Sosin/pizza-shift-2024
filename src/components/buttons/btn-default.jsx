import styles from "./styles.module.css"

//Компонент кнопки
export const BtnDefault = ({ type, children, onClick }) => (
    <button className={`button ${styles.btn_default}`} onClick={onClick}>
        {children}
    </button>
)