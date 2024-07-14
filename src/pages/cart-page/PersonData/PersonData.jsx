import { useContext } from "react"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { useLoaderData } from "react-router-dom"

import { Button } from "../../../components/Button/Button.jsx"
import { Input } from "../../../components/Input/Input.jsx"
import { addPerson, addReceiverAddress } from "../../../store/pizzaSlice.js"
import { PageContext } from "../cart-page.jsx"
import styles from "./PersonData.module.css"

export const PersonData = () => {
    const { setStage } = useContext(PageContext)
    const user = useLoaderData().user
    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const onSubmit = (data) => {
        const person = {
            firstname: data.firstname,
            lastname: data.lastname,
            middlename: data.middlename,
            phone: data.phone
        }
        const receiverAddress = parseAddress(data.address)
        dispatch(addPerson(person))
        dispatch(addReceiverAddress(receiverAddress))
        setStage("bankCard")
    }

    const parseAddress = (address) => {
        const addressParts = address.split(",").map((part) => part.trim())

        const addressObject = {
            street: addressParts[1],
            house: addressParts[2],
            apartment: addressParts[3] || "",
            comment: addressParts[4] || ""
        }

        return addressObject
    }

    return (
        <form className="form">
            <h1>Введите ваши данные</h1>
            <Input
                text="Фамилия*"
                type="text"
                id="profile-lastname"
                name="lastname"
                placeholder="Фамилия"
                defaultValue={user?.lastname}
                register={register}
                label="lastname"
                required={{
                    required: true,
                    pattern: {
                        value: /^[А-Я-]+$/i,
                        message: "Фамилия должна содержать только буквы"
                    },
                    maxLength: 100
                }}
                error={errors.lastname?.message}
            />
            <Input
                text="Имя*"
                type="text"
                id="profile-firstname"
                name="firstname"
                placeholder="Имя"
                defaultValue={user?.firstname}
                register={register}
                label="firstname"
                required={{
                    required: true,
                    pattern: {
                        value: /^[А-Я-]+$/i,
                        message: "Имя должно содержать только буквы"
                    },
                    maxLength: 100
                }}
                error={errors.firstname?.message}
            />
            <Input
                text="Отчество*"
                type="text"
                id="profile-middlename"
                name="middlename"
                placeholder="Отчество"
                defaultValue={user?.middlename}
                register={register}
                label="middlename"
                required={{
                    required: true,
                    pattern: {
                        value: /^[А-Я-]+$/i,
                        message: "Отчество должно содержать только буквы"
                    },
                    maxLength: 100
                }}
                error={errors.middlename?.message}
            />
            <Input
                text="Телефон*"
                type="text"
                id="profile-phone"
                name="phone"
                placeholder="Телефон"
                readOnly={true}
                defaultValue={user?.phone}
                register={register}
                label="phone"
                required={{
                    required: true,
                    pattern: {
                        value: /^(\+7|8)(\d{10})$/i,
                        message: "Неправильный номер телефона!"
                    },
                    maxLength: 100
                }}
                error={errors.phone?.message}
            />
            <Input
                text="Email"
                type="text"
                id="profile-email"
                name="email"
                placeholder="Email"
                defaultValue={user?.email}
                register={register}
                label="email"
                required={{
                    required: true,
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,64}$/i,
                        message: "Неправильный email!"
                    },
                    maxLength: 100
                }}
                error={errors.email?.message}
            />
            <Input
                text="Адрес"
                type="text"
                id="cart-address"
                name="address"
                placeholder="Адрес"
                defaultValue={user?.city}
                register={register}
                label="address"
                required={{
                    required: true,
                    pattern: {
                        value: /^[А-Я0-9- .]+,[А-Я0-9- .]+,[А-Я0-9- .]+,[А-Я0-9- .]+,*[А-Я0-9- .]*$/i,
                        message: "Пожалуйста введите весь адрес, через запятую"
                    },
                    maxLength: 100
                }}
                error={errors.address?.message}
            />
            <div className={styles.buttons}>
                <Button type="default" onClick={() => setStage("purchases")}>
                    Назад
                </Button>
                <Button type="primary" onClick={handleSubmit(onSubmit)}>
                    Продолжить
                </Button>
            </div>
        </form>
    )
}
