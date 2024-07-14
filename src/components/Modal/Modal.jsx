import { useEffect } from "react"

import { CloseIcon } from "../../assets/CloseIcon.jsx"
import styles from "./Modal.module.css"

export const Modal = ({children, onClose}) => {
    document.body.style.overflow = 'hidden';
    //TODO - исправить костыль для модалки
    // "Костыль, чтобы при открытии модалки дефолтно выбирались средний размер пиццы, и традиционное тесто"
    useEffect(() => {
        const size = document.getElementById("MEDIUM")
        if(size)
            size.checked = true;
        const dough = document.getElementById("THICK")
        if(dough)
            dough.checked = true;
    }, [])

    return(
        <div className={styles.modal}>
            <div className={styles.modal_content}>
                <div className={styles.close} onClick={onClose}>
                    <CloseIcon />
                </div>
                {children}
            </div>
        </div>
    )
}