import styles from "./styles.module.css"
import { BtnDefault } from "../buttons/btn-default.jsx"
import { BtnPrimary } from "../buttons/btn-primary.jsx"
import { Input } from "../input/index.jsx"
import { useContext } from "react"
import { PageContext } from "../../pages/cart-page.jsx"
import { useLoaderData } from "react-router-dom"
import { useForm } from "react-hook-form"

export const DataEntry = () => {
    const {setStage} = useContext(PageContext)
    const user = useLoaderData().profile.user
    const { register, handleSubmit, errors, reset } = useForm();

    const onSubmit = (data) => {
        reset();
        setStage("bankCard")
        console.log(data)
    }

    return(
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <h1>Введите ваши данные</h1>
            <Input
                text="Фамилия*"
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Фамилия"
                defaultValue={user?.lastname}
                ref={
                    register("lastname", {
                        required: true,
                        maxLength: 100
                    })
                }
                error-msg={errors.lastname.message}
            />
            <Input
                text="Имя*"
                type="text"
                id="firstname"
                name="firstname"
                placeholder="Имя"
                defaultValue={user?.firstname}
                ref={
                    register("firstname", {
                        required: true,
                        maxLength: 100
                    })
                }
                error-msg={errors.firstname.message}
            />
            <Input
                text="Отчество*"
                type="text"
                id="middlename"
                name="middlename"
                placeholder="Отчество"
                defaultValue={user?.middlename}
                ref={
                    register("middlename", {
                        required: true,
                        maxLength: 100
                    })
                }
                error-msg={errors.middlename.message}
            />
            <Input
                text="Телефон*"
                type="text"
                id="phone"
                name="phone"
                placeholder="Телефон"
                disabled={true}
                defaultValue={user?.phone}
                ref={
                    register("phone", {
                        required: "phone required",
                        pattern: {
                            value: /^(\+7|8)[- ]?(\d{3})[- ]?(\d{3})[- ]?(\d{2})[- ]?(\d{2})$/i,
                            message: "Неправильный номер телефона!"
                        }
                    })
                }
                error-msg={errors.phone.message}
            />
            <Input
                text="Email"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                defaultValue={user?.email}
                ref={
                    register("email", {
                        required: "email required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,64}$/i,
                            message: "Неправильный email!"
                        }
                    })
                }
                error-msg={errors.email.message}
            />
            <Input
                text={"Адрес"}
                type={"text"}
                id={"address"}
                name={"address"}
                placeholder={"Адрес"}
                ref={
                    register("email", {
                        required: true,
                        maxLength:100
                    })
                }
                error-msg={errors.address.message}
            />
            <div className={styles.buttons}>
                <BtnDefault onClick={() => setStage("purchases")}>
                    Назад
                </BtnDefault>
                <BtnPrimary onClick={handleSubmit(onSubmit)}>
                    Продолжить
                </BtnPrimary>
            </div>
        </form>
    )
}