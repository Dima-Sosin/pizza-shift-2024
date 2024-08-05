import styles from "./DebitCard.module.css"

import { useContext, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useHookFormMask } from "use-mask-input"

import { api } from "@api"
import { Button } from "@components/Button/Button.jsx"
import { Input } from "@components/Input/Input.jsx"
import { addDebitCard, deleteAll, selectCart } from "@store/pizzaSlice.js"

import { PageContext } from "../cart-page.jsx"

import { ModalSuccess } from "./ModalSuccess.jsx"

export const DebitCard = () => {
    const { setStage } = useContext(PageContext)
    const [isModal, setIsModal] = useState(false)
    const dispatch = useDispatch()
    const pizza = useSelector(selectCart)
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()
    const registerWithMask = useHookFormMask(register)

    // Костыль, так как данные попадают в store не сразу после dispatch, то нужно задержать POST запрос
    useEffect(() => {
        api.post("/pizza/payment", pizza).then((result) => result)
    }, [pizza.debitCard])

    const onSubmit = (data) => {
        dispatch(addDebitCard(data))
        setIsModal(true)
    }

    return (
        <>
            <h1>Введите данные карты для оплаты</h1>
            <form className="form">
                <div className={styles.block}>
                    <Input
                        text="Номер*"
                        type="text"
                        id="cart-pan"
                        name="pan"
                        placeholder="0000 0000"
                        register={registerWithMask}
                        label="pan"
                        mask={["9999 9999"]}
                        required={{
                            required: true,
                            pattern: {
                                value: /^[0-9]{4} [0-9]{4}$/,
                                message: "Обязательное поле!"
                            }
                        }}
                        error={errors.pan?.message}
                    />
                    <div className={styles.lower}>
                        <Input
                            text="Срок*"
                            type="expireDate"
                            id="cart-expireDate"
                            name="expireDate"
                            placeholder="мм/гг"
                            register={registerWithMask}
                            label="expireDate"
                            mask={["99/99"]}
                            required={{
                                required: true,
                                pattern: {
                                    value: /^((0[1-9])|(1[0-2]))\/((2[4-9])|([3-9][0-9]))$/,
                                    message: "Неправильная дата!"
                                }
                            }}
                            error={errors.expireDate?.message}
                        />
                        <Input
                            text="CVV*"
                            type="text"
                            id="cart-cvv"
                            name="cvv"
                            placeholder="000"
                            register={registerWithMask}
                            label="cvv"
                            mask={["999"]}
                            required={{
                                required: true,
                                pattern: {
                                    value: /^[0-9]{3}$/,
                                    message: "Обязательное поле!"
                                }
                            }}
                            error={errors.cvv?.message}
                        />
                    </div>
                </div>
                <div className={styles.buttons}>
                    <Button type="default" onClick={() => setStage("personalData")}>
                        Назад
                    </Button>
                    <Button type="primary" onClick={handleSubmit(onSubmit)}>
                        Оплатить
                    </Button>
                </div>
            </form>
            {isModal && (
                <ModalSuccess
                    pizza={pizza}
                    onClose={() => {
                        setIsModal(false)
                        dispatch(deleteAll())
                        document.body.style.overflowY = "scroll"
                    }}
                />
            )}
        </>
    )
}
