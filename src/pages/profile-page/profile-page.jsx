import { useForm } from "react-hook-form"
import { useLoaderData } from "react-router-dom"
import { useHookFormMask } from "use-mask-input"

import { api } from "@api"
import { Button } from "@components/Button/Button.jsx"
import { Input } from "@components/Input/Input.jsx"

export function ProfilePage() {
    const user = useLoaderData().user
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()
    const registerWithMask = useHookFormMask(register)

    const onSubmit = (data) => {
        const updateProfile = {
            profile: {
                firstname: data.firstname,
                middlename: data.middlename,
                lastname: data.lastname,
                email: data.email,
                city: data.city
            },
            phone: user.phone
        }
        api.patch("/users/profile", updateProfile, localStorage.getItem("token")).then(
            (result) => result
        )
    }

    return (
        <div className="page">
            <div className="container">
                <form className="form">
                    <h1>Профиль</h1>
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
                        defaultValue={user?.firstname}
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
                        defaultValue={user?.middlename}
                        register={register}
                        label="middlename"
                        required={{
                            required: true,
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
                        defaultValue={user?.phone}
                        register={registerWithMask}
                        label="phone"
                        mask={["+7 999 999 99 99"]}
                        required={{
                            required: true
                        }}
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
                        text="Город"
                        type="text"
                        id="profile-city"
                        name="city"
                        placeholder="Город"
                        defaultValue={user?.city}
                        register={register}
                        label="city"
                        required={{
                            required: true,
                            maxLength: 100
                        }}
                        error={errors.city?.message}
                    />
                    <Button type="primary" onClick={handleSubmit(onSubmit)}>
                        Обновить данные
                    </Button>
                </form>
            </div>
        </div>
    )
}
