import styles from "@components/LogOn/LogOn.module.css"

import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useHookFormMask } from "use-mask-input"

import { api } from "@api"
import { Button } from "@components/Button/Button.jsx"
import { Input } from "@components/Input/Input.jsx"
import { Modal } from "@components/Modal/Modal.jsx"

export const ModalCode = ({ onClose, setIsAuth, phone }) => {
    const { register, handleSubmit } = useForm()
    const registerWithMask = useHookFormMask(register)

    const [counter, setCounter] = useState(120)

    const onSubmit = (data) => {
        let auth = {}
        api.post("/users/signin", data).then((result) => {
            auth = result
            localStorage.setItem("token", auth.token)
            setIsAuth(!!localStorage.getItem("token"))
            window.location.reload()
        })
        onClose()
    }

    useEffect(() => {
        if (counter > 0) {
            setTimeout(function () {
                setCounter(counter - 1)
            }, 1000)
        }
    }, [counter])

    return (
        <Modal onClose={onClose}>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <h2>Авторизация</h2>
                <p className={styles.text}>Введите проверочный код для входа в личный кабинет</p>
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
                        required: true,
                        pattern: {
                            value: /^\+7 [0-9]{3} [0-9]{3} [0-9]{2} [0-9]{2}$/,
                            message: "Обязательное поле!"
                        }
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
                <Button type="primary" onClick={handleSubmit(onSubmit)}>
                    Продолжить
                </Button>
            </form>
            {counter !== 0 && (
                <p className={styles.timer}>Запросить код повторно можно через {counter} секунд</p>
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
    )
}
