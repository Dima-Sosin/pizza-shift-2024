import { useContext, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useHookFormMask } from "use-mask-input"

import { POST } from "../../../api/index.js"
import { Button } from "../../../components/Button/Button.jsx"
import { Input } from "../../../components/Input/Input.jsx"
import { addDebitCard, deleteAll, selectCart } from "../../../store/pizzaSlice.js"
import { PageContext } from "../cart-page.jsx"
import styles from "./DebitCard.module.css"
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

    //TODO - исправить костыль для POST запроса
    // Костыль, так как данные попадают в store не сразу после dispatch, то нужно задержать POST запрос
    useEffect(() => {
        POST("/pizza/payment", pizza).then((result) => result)
    }, [pizza.debitCard])

    const onSubmit = (data) => {
        dispatch(addDebitCard(data))
        setIsModal(true)
    }

    return (
        <>
            <form className="form">
                <h2>Введите данные карты для оплаты</h2>
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
                        }}
                    />
                    <div className={styles.lower}>
                        <Input
                            text="Срок*"
                            type="expireDate"
                            id="cart-expireDate"
                            name="term"
                            placeholder="мм/гг"
                            register={registerWithMask}
                            label="expireDate"
                            mask={["99/99"]}
                            required={{
                                required: true,
                                pattern: {
                                    value: /^((0[0-9])|(1[0-2]))\/[0-9]{2}$/,
                                    message: "Неправильная дата!"
                                }
                            }}
                            error={errors.term?.message}
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
                            }}
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
                        document.body.style.overflow = "unset"
                        dispatch(deleteAll())
                    }}
                />
            )}
        </>
    )
}
