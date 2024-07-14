import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"

import { Button } from "../../../components/Button/Button.jsx"
import { Input } from "../../../components/Input/Input.jsx"
import { POST } from "../../../api/index.js"
import { addDebitCard, deleteAll, selectCart } from "../../../store/pizzaSlice.js"
import styles from "./DebitCard.module.css"
import { ModalSuccess } from "./ModalSuccess.jsx"

export const DebitCard = () => {
    const [isModal, setIsModal] = useState(false)
    const dispatch = useDispatch()
    const pizza = useSelector(selectCart)
    const { register, handleSubmit, errors } = useForm()

    //TODO - исправить костыль для POST запроса
    // Костыль, так как данные попадают в store не сразу после dispatch, то нужно задержать POST запрос
    useEffect(() => {
        POST("/pizza/payment", pizza).then((result) => {
            console.log(result)
        })
    }, [pizza.debitCard])

    const onSubmit = (data) => {
        dispatch(addDebitCard(data))
        setIsModal(true)
    }

    return (
        <>
            <form className="form">
                <h1>Введите данные карты для оплаты</h1>
                <div className={styles.block}>
                    <Input
                        text="Номер*"
                        type="text"
                        id="cart-pan"
                        name="pan"
                        placeholder="0000 0000"
                        register={register}
                        label="pan"
                        required={{
                            required: "number required",
                            pattern: {
                                value: /^\d{4} \d{4}$/,
                                message: "Неправильный номер банковской карты!"
                            }
                        }}
                        error-msg={errors?.number.message}
                    />
                    <div className={styles.lower}>
                        <Input
                            text="Срок*"
                            type="expireDate"
                            id="cart-expireDate"
                            name="term"
                            placeholder="00/00"
                            register={register}
                            label="expireDate"
                            required={{
                                required: "expire date required",
                                pattern: {
                                    value: /^(([0][0-9])|([1][0-2]))[\/][0-9]{2}$/,
                                    message: "Неправильная дата!"
                                }
                            }}
                            error-msg={errors?.term.message}
                        />
                        <Input
                            text="CVV*"
                            type="text"
                            id="cart-cvv"
                            name="cvv"
                            placeholder="0000"
                            register={register}
                            label="cvv"
                            required={{
                                required: "cvv required",
                                pattern: {
                                    value: /^[0-9]{4}$/,
                                    message: "Неправильный CVV код!"
                                }
                            }}
                            error-msg={errors?.cvv.message}
                        />
                    </div>
                </div>
                <Button type="primary" onClick={handleSubmit(onSubmit)}>
                    Оплатить
                </Button>
            </form>
            {isModal && (
                <ModalSuccess
                    pizza={pizza}
                    onClose={() => {
                        setIsModal(false)
                        document.body.style.overflow = "unset"
                        dispatch(deleteAll())
                    }}
                />
            )}
        </>
    )
}
