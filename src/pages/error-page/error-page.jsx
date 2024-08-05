import styles from "./ErrorPage.module.css"

import { useRouteError } from "react-router-dom"

export const ErrorPage = () => {
    const error = useRouteError()
    console.error(error)

    return (
        <div className={styles.error_page}>
            <h1>Упс!</h1>
            <p className={styles.error_subtitle}>К сожалению, произошла непредвиденная ошибка.</p>
            <p className={styles.error_subtitle}>Вернитесь позднее.</p>
        </div>
    )
}
