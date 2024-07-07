import styles from "./styles.module.css"
import { BtnPrimary } from "../buttons/btn-primary.jsx"
import { useEffect, useState } from "react"
import { Modal } from "../modal/index.jsx"
import  success from "../../assets/success.svg"
import { Link } from "react-router-dom"
import { Input } from "../input/index.jsx"
import { useForm } from "react-hook-form"

export const BankCard = () => {
    const[isModal, setIsModal] = useState(false)

    const onSubmit = (data) => {
        reset();
        setIsModal(true)
        console.log(data)
    }

    const { register, handleSubmit, errors, reset } = useForm();

    useEffect(() => {
        if(isModal){
            document.body.style.overflow = 'hidden';
        }
        else{
            document.body.style.overflow = 'unset';
        }
    }, [isModal])

    return(
        <>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <h1>Введите данные карты для оплаты</h1>
                <div className={styles.block}>
                    <Input
                        text="Номер*"
                        type="text"
                        id="number"
                        name="number"
                        placeholder="0000 0000"
                        ref={
                            register("number", {
                                required: "number required",
                                pattern: {
                                    value: /^\d{4}[ ]\d{4}$/,
                                    message: "Неправильный номер банковской карты!"
                                }
                            })
                        }
                        error-msg={errors.number.message}
                    />
                    <div className={styles.lower}>
                        <Input
                            text="Срок*"
                            type="text"
                            id="term"
                            name="term"
                            placeholder="00/00"
                            ref={
                                register("number", {
                                    required: "term required",
                                    pattern: {
                                        value: /^(([0][0-9])|([1][0-2]))[\/][0-9]{2}$/,
                                        message: "Неправильная дата!"
                                    }
                                })
                            }
                            error-msg={errors.term.message}
                        />
                        <Input
                            text="CVV*"
                            type="text"
                            id="cvv"
                            name="cvv"
                            placeholder="0000"
                            ref={
                                register("number", {
                                    required: "cvv required",
                                    pattern: {
                                        value: /^[0-9]{4}$/,
                                        message: "Неправильный CVV код!"
                                    }
                                })
                            }
                            error-msg={errors.cvv.message}
                        />
                    </div>
                </div>
                <BtnPrimary>
                    Оплатить
                </BtnPrimary>
            </form>
            {isModal &&
                <Modal setIsModal={setIsModal}>
                    <div className={styles.modal}>
                        <img
                            src={success}
                            alt="success"
                        />
                        <h2>Оплата прошла успешно!</h2>
                        <p>
                            <span>Заказ</span><br/>
                            <p></p>
                            <span>Адрес доставки</span><br/>
                            <p></p>
                            <span>Сумма заказа</span>
                            <p></p>
                            <span>Вся информация была продублирована в SMS</span>
                        </p>
                        <Link to="/catalog">
                            Перейти в главное меню
                        </Link>
                    </div>
                </Modal>
            }

        </>
    )
}