import { Input } from "../components/input"
import { BtnPrimary } from "../components/buttons/btn-primary.jsx"
import { useLoaderData } from "react-router-dom"
import { useForm } from "react-hook-form"
import { PATCH } from "../rest-api/index.js"

export function ProfilePage() {
    const user = useLoaderData().user
    console.log(user)
    const { register, handleSubmit, errors, reset } = useForm();

    const onSubmit = (data) => {
        reset();
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
        PATCH("/users/profile", updateProfile, localStorage.getItem("token")).then(result => console.log(result))
    }

    return (
        <div className="page">
            <div className="container">
                <form className="form">
                    <h1>Профиль</h1>
                    <Input
                        text="Фамилия*"
                        type="text"
                        id="lastname"
                        name="lastname"
                        placeholder="Фамилия"
                        defaultValue={user?.lastname}
                        register={register}
                        label="lastname"
                        required={{
                            required: true,
                            maxLength: 100
                        }}
                        error-msg={errors?.lastname.message}
                    />
                    <Input
                        text="Имя*"
                        type="text"
                        id="firstname"
                        name="firstname"
                        placeholder="Имя"
                        defaultValue={user?.firstname}
                        register={register}
                        label="firstname"
                        required={{
                            required: true,
                            maxLength: 100
                        }}
                        error-msg={errors?.firstname.message}
                    />
                    <Input
                        text="Отчество*"
                        type="text"
                        id="middlename"
                        name="middlename"
                        placeholder="Отчество"
                        defaultValue={user?.middlename}
                        register={register}
                        label="middlename"
                        required={{
                            required: true,
                            maxLength: 100
                        }}
                        error-msg={errors?.middlename.message}
                    />
                    <Input
                        text="Телефон*"
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="Телефон"
                        readOnly={true}
                        defaultValue={user?.phone}
                        register={register}
                        label="phone"
                        required={{
                            required: "phone required",
                            pattern: {
                                value: /^(\+7|8)[- ]?(\d{3})[- ]?(\d{3})[- ]?(\d{2})[- ]?(\d{2})$/i,
                                message: "Неправильный номер телефона!"
                            }
                        }}
                        errorMsg={errors?.phone.message}
                    />
                    <Input
                        text="Email"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        defaultValue={user?.email}
                        register={register}
                        label="email"
                        required={{
                            required: "email required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,64}$/i,
                                message: "Неправильный email!"
                            }
                        }}
                        error-msg={errors?.email.message}
                    />
                    <Input
                        text="Город"
                        type="text"
                        id="city"
                        name="city"
                        placeholder="Город"
                        defaultValue={user?.city}
                        register={register}
                        label="city"
                        required={{
                            required: true,
                            maxLength: 100
                        }}
                        error-msg={errors?.city.message}
                    />
                    <BtnPrimary onClick={handleSubmit(onSubmit)}>
                        Обновить данные
                    </BtnPrimary>
                </form>
            </div>
        </div>
    )
}
