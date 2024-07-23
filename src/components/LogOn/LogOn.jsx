import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useHookFormMask } from "use-mask-input"

import { api } from "../../api/api.js"
import { Button } from "../Button/Button.jsx"
import { Input } from "../Input/Input.jsx"
import { Modal } from "../Modal/Modal.jsx"
import styles from "./LogOn.module.css"

export const LogOn = ({ onClose, setIsAuth }) => {
    const { register, handleSubmit } = useForm()
    const registerWithMask = useHookFormMask(register)

    const [modal, setModal] = useState("phone")
    const [phone, setPhone] = useState("")
    const [counter, setCounter] = useState(120)

    useEffect(() => {
        if (counter > 0 && modal === "code") {
            setTimeout(function () {
                setCounter(counter - 1)
            }, 1000)
        }
    }, [counter, modal])

    const onSubmit1 = (data) => {
        setPhone(data.phone)
        api.post("/auth/otp", data).then((result) => result)
        setModal("code")
    }

    const onSubmit2 = (data) => {
        let auth = {}
        api.post("/users/signin", data).then((result) => {
            auth = result
            localStorage.setItem("token", auth.token)
            setIsAuth(!!localStorage.getItem("token"))
        })
        onClose()
    }

    return (
        <>
            {modal === "phone" && (
                <Modal onClose={onClose}>
                    <form className="form" onSubmit={handleSubmit(onSubmit1)}>
                        <h2>Авторизация</h2>
                        <p>Введите номер телефона для входа в личный кабинет</p>
                        <Input
                            type="text"
                            id="phone"
                            name="phone"
                            placeholder="Телефон"
                            register={registerWithMask}
                            label="phone"
                            mask={["+7 999 999 99 99"]}
                            required={{
                                required: true
                            }}
                        />
                        <Button type="primary" onClick={handleSubmit(onSubmit1)}>
                            Продолжить
                        </Button>
                    </form>
                </Modal>
            )}
            {modal === "code" && (
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
                            register={registerWithMask}
                            label="phone"
                            mask={["+7 999 999 99 99"]}
                            required={{
                                required: true
                            }}
                        />
                        <Input
                            type="text"
                            id="code"
                            name="code"
                            placeholder="Проверочный код"
                            register={registerWithMask}
                            label="code"
                            mask={["999999"]}
                            required={{
                                required: true
                            }}
                        />
                        <Button type="primary" onClick={handleSubmit(onSubmit2)}>
                            Продолжить
                        </Button>
                    </form>
                    {counter !== 0 && (
                        <p className={styles.timer}>
                            Запросить код повторно можно через {counter} секунд
                        </p>
                    )}
                    {counter === 0 && (
                        <Button
                            type="link"
                            onClick={() => {
                                api.post("/auth/otp", { phone: phone }).then((result) => result)
                            }}
                        >
                            Запросить код еще раз
                        </Button>
                    )}
                </Modal>
            )}
        </>
    )
}
