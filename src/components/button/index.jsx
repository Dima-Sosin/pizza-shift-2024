import styles from "./styles.module.css"

//Компонент кнопки
export const Button = ({ type, children, onClick }) => (
    <button className={`${styles.button} ${type}`} onClick={onClick}>
        {children}
    </button>
)