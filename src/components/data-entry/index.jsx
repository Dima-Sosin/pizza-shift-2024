import styles from "./styles.module.css"
import { BtnDefault } from "../buttons/btn-default.jsx"
import { BtnPrimary } from "../buttons/btn-primary.jsx"
import { Input } from "../input/index.jsx"
import { useState } from "react"

export const DataEntry = ({onClick}) => {
    const [lastName, setLastName] = useState(localStorage.getItem("lastName"))
    const [firstName, setFirstName] = useState(localStorage.getItem("firstName"))
    const [patronymic, setPatronymic] = useState(localStorage.getItem("patronymic"))
    const [telephone, setTelephone] = useState(localStorage.getItem("telephone"))
    const [email, setEmail] = useState(localStorage.getItem("email"))

    const btnClick = (event) => {
        event.preventDefault()
        localStorage.setItem("lastName", lastName)
        localStorage.setItem("firstName", firstName)
        localStorage.setItem("patronymic", patronymic)
        localStorage.setItem("telephone", telephone)
        localStorage.setItem("email", email)
        onClick("bankCard")
    }

    return(
        <form className="form">
            <h1>Введите ваши данные</h1>
            <Input
                text={"Фамилия*"}
                type={"text"}
                id={"lastName"}
                name={"lastName"}
                placeholder={"Фамилия"}
                defaultValue={lastName}
                onChange={(event) => setLastName(event.target.value)}
            />
            <Input
                text={"Имя*"}
                type={"text"}
                id={"firstName"}
                name={"firstName"}
                placeholder={"Имя"}
                defaultValue={firstName}
                onChange={(event) => setFirstName(event.target.value)}
            />
            <Input
                text={"Отчество*"}
                type={"text"}
                id={"patronymic"}
                name={"patronymic"}
                placeholder={"Отчество"}
                defaultValue={patronymic}
                onChange={(event) => setPatronymic(event.target.value)}
            />
            <Input
                text={"Телефон*"}
                type={"text"}
                id={"telephone"}
                name={"telephone"}
                placeholder={"Телефон"}
                defaultValue={telephone}
                onChange={(event) => setTelephone(event.target.value)}
            />
            <Input
                text={"Email"}
                type={"email"}
                id={"email"}
                name={"email"}
                placeholder={"Email"}
                defaultValue={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            <Input
                text={"Адрес"}
                type={"text"}
                id={"address"}
                name={"address"}
                placeholder={"Адрес"}
                onChange={{/*(event) => setTown(event.target.value)*/}}
            />
            <div className={styles.buttons}>
                <BtnDefault onClick={() => onClick("purchases")} type={"default"}>Назад</BtnDefault>
                <BtnPrimary onClick={btnClick}>Продолжить</BtnPrimary>
            </div>
        </form>
    )
}