import { useState } from "react"
import { useForm } from "react-hook-form"

import { POST } from "../../api/index.js"
import { Button } from "../Button/Button.jsx"
import { Input } from "../Input/Input.jsx"
import { Modal } from "../Modal/Modal.jsx"

export const Modals = ({onClose}) => {
    const [modal, setModal] = useState("phone")
    const { register, handleSubmit, reset } = useForm();
    const [phone, setPhone] = useState("")

    const onSubmit1 = (data) => {
        reset();
        setPhone(data.phone)
        POST("/auth/otp", data).then(result => console.log(result))
        setModal("code")
    }
    const onSubmit2 = (data) => {
        reset();
        console.log(data)
        let auth = {}
        POST("/users/signin", data).then(result => {
            auth = result
            localStorage.setItem("token", auth.token)
        })
        onClose()
    }

    return(
        <>
            {(modal === "phone") &&
                <Modal onClose={onClose}>
                    <form className="form" onSubmit={handleSubmit(onSubmit1)}>
                        <h2>Авторизация</h2>
                        <p>Введите номер телефона для входа в личный кабинет</p>
                        <Input
                            type="text"
                            id="phone"
                            name="phone"
                            placeholder="Телефон"
                            re
                            register={register}
                            label="phone"
                            required={{
                                required: "phone required",
                                pattern: {
                                    value: /^(\+7|8)[- ]?(\d{3})[- ]?(\d{3})[- ]?(\d{2})[- ]?(\d{2})$/i,
                                    message: "Неправильный номер телефона!"
                                }
                            }}
                        />
                        <Button type="primary" onClick={handleSubmit(onSubmit1)}>Продолжить</Button>
                    </form>
                </Modal>
            }
            {(modal === "code") &&
                <Modal onClose={onClose}>
                    <form className="form" onSubmit={handleSubmit(onSubmit2)}>
                        <h2>Авторизация</h2>
                        <p>Введите проверочный код для входа в личный кабинет</p>
                        <Input
                            type="text"
                            id="phone"
                            name="phone"
                            placeholder="Телефон"
                            defaultValue={phone}
                            register={register}
                            label="phone"
                            ref={{
                                required: "phone required",
                                pattern: {
                                    value: /^(\+7|8)[- ]?(\d{3})[- ]?(\d{3})[- ]?(\d{2})[- ]?(\d{2})$/i,
                                    message: "Неправильный номер телефона!"
                                }
                            }}
                        />
                        <Input
                            type="text"
                            id="code"
                            name="code"
                            placeholder="Проверочный код"
                                register={register}
                            label="code"
                            ref={{
                                required: "code required",
                                maxLength:6
                            }}
                        />
                        <Button type="primary" onClick={handleSubmit(onSubmit2)}>Продолжить</Button>
                    </form>
                </Modal>
            }
        </>


    )
}