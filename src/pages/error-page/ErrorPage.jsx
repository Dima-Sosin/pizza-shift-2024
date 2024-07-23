import { useRouteError } from "react-router-dom"

export const ErrorPage = () => {
    const error = useRouteError()
    console.error(error)

    return (
        <div className="error_page">
            <h1>Упс!</h1>
            <p className="error_subtitle">К сожалению, произошла непредвиденная ошибка.</p>
            <p className="error_subtitle">Вернитесь позднее.</p>
        </div>
    )
}
