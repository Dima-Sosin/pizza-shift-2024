import styles from "./styles.module.css"
import { useEffect } from "react"

export const Modal = ({children, setIsModal}) => {
    useEffect(() => {
        document.getElementById("MEDIUM").checked = true;
        document.getElementById("THICK").checked = true;
    }, [])
    return(
        <div className={styles.modal}>
            <div className={styles.modal_content}>
                <div className={styles.close} onClick={() => setIsModal(false)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="transparent" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.085 3.53a.75.75 0 0 0-1.06 0l-7.719 7.718-7.71-7.711a.75.75 0 1 0-1.06 1.06l7.71 7.712-7.716 7.716a.75.75 0 1 0 1.061 1.061l7.715-7.717 7.726 7.725a.75.75 0 0 0 1.06-1.06l-7.724-7.725 7.717-7.719a.75.75 0 0 0 0-1.06" fill="currentColor"/>
                    </svg>
                </div>
                {children}
            </div>
        </div>
    )
}