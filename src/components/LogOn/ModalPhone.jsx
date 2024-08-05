import styles from "@components/LogOn/LogOn.module.css"

import { useContext } from "react"
import { useForm } from "react-hook-form"
import { useHookFormMask } from "use-mask-input"

import { api } from "@api"
import { Button } from "@components/Button/Button.jsx"
import { Input } from "@components/Input/Input.jsx"
import { ModalContext } from "@components/LogOn/LogOn.jsx"
import { Modal } from "@components/Modal/Modal.jsx"

export const ModalPhone = ({ onClose, setPhone }) => {
    const { register, handleSubmit } = useForm()
    const registerWithMask = useHookFormMask(register)

    const { setModal } = useContext(ModalContext)

    const onSubmit = (data) => {
        setPhone(data.phone)
        api.post("/auth/otp", data).then((result) => result)
        setModal("code")
    }

    return (
        <Modal onClose={onClose}>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <h2>Авторизация</h2>
                <p className={styles.text}>Введите номер телефона для входа в личный кабинет</p>
                <Input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Телефон"
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
                <Button type="primary" onClick={handleSubmit(onSubmit)}>
                    Продолжить
                </Button>
            </form>
        </Modal>
    )
}
