import { useState } from "react"
import { useForm } from "react-hook-form"
import { useLoaderData, useNavigate } from "react-router-dom"
import { useHookFormMask } from "use-mask-input"

import { api } from "@api"
import { Button } from "@components/Button/Button.jsx"
import { Input } from "@components/Input/Input.jsx"
import { LogOn } from "@components/LogOn/LogOn.jsx"
import { LogOut } from "@components/LogOut/LogOut.jsx"
import { PageLayout } from "@components/PageLayout/PageLayout.jsx"

export function ProfilePage() {
    const data = useLoaderData()
    const nav = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()
    const registerWithMask = useHookFormMask(register)

    const [isModal, setIsModal] = useState(false)
    const [isAuth, setIsAuth] = useState(!!localStorage.getItem("token"))

    const Modal = {
        true: <LogOut onClose={() => setIsModal(false)} setIsAuth={setIsAuth} />,
        false: <LogOn onClose={() => setIsModal(false)} setIsAuth={setIsAuth} />
    }

    const onSubmit = (data) => {
        const updateProfile = {
            profile: {
                firstname: data?.firstname,
                middlename: data?.middlename,
                lastname: data?.lastname,
                email: data?.email,
                city: data?.city
            },
            phone: data?.phone
        }
        api.patch("/users/profile", updateProfile, localStorage.getItem("token")).then(
            (result) => result
        )
        nav("/catalog")
    }

    return (
        <PageLayout>
            <h1>Профиль</h1>
            {data?.success && (
                <form className="form">
                    <Input
                        text="Фамилия*"
                        type="text"
                        id="profile-lastname"
                        name="lastname"
                        placeholder="Фамилия"
                        defaultValue={data.user?.lastname}
                        register={register}
                        label="lastname"
                        required={{
                            required: true,
                            pattern: {
                                value: /^[A-ZА-Я-]+$/i,
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
                        defaultValue={data.user?.firstname}
                        register={register}
                        label="firstname"
                        required={{
                            required: true,
                            pattern: {
                                value: /^[A-ZА-Я-]+$/i,
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
                        defaultValue={data.user?.middlename}
                        register={register}
                        label="middlename"
                        required={{
                            pattern: {
                                value: /^[A-ZА-Я-]+$/i,
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
                        defaultValue={data.user?.phone}
                        register={registerWithMask}
                        label="phone"
                        mask={["+7 999 999 99 99"]}
                    />
                    <Input
                        text="Email"
                        type="text"
                        id="profile-email"
                        name="email"
                        placeholder="Email"
                        defaultValue={data.user?.email}
                        register={register}
                        label="email"
                        required={{
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,64}$/i,
                                message: "Неправильный email!"
                            },
                            maxLength: 100
                        }}
                        error={errors.email?.message}
                    />
                    <Input
                        text="Город"
                        type="text"
                        id="profile-city"
                        name="city"
                        placeholder="Город"
                        defaultValue={data.user?.city}
                        register={register}
                        label="city"
                        required={{
                            maxLength: 100
                        }}
                        error={errors.city?.message}
                    />
                    <Button type="primary" onClick={handleSubmit(onSubmit)}>
                        Обновить данные
                    </Button>
                </form>
            )}
            <Button type="default" onClick={() => setIsModal(true)}>
                {isAuth ? "Выйти из аккаунта" : "Войти в аккаунт"}
            </Button>
            {isModal && Modal[isAuth]}
        </PageLayout>
    )
}
