import styles from "./styles.module.css"
import { BtnPrimary } from "../buttons/btn-primary.jsx"
import { useEffect, useState } from "react"
import { Modal } from "../modal/index.jsx"
import  success from "../../assets/success.svg"
import { Link } from "react-router-dom"
import { Input } from "../input/index.jsx"

export const BankCard = () => {
    const[isModal, setIsModal] = useState(false)
    const BtnPrimaryHandle = (event) => {
        event.preventDefault()
        setIsModal(true)
    }

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
            <form className="form">
                <h1>Введите данные карты для оплаты</h1>
                <div className={styles.block}>
                    <Input
                        text={"Номер*"}
                        type={"text"}
                        id={"number"}
                        name={"number"}
                        placeholder={"0000 0000"}
                        onChange={(event) => setLastName(event.target.value)}
                    />
                    <div className={styles.lower}>
                        <Input
                            text={"Срок*"}
                            type={"text"}
                            id={"term"}
                            name={"term"}
                            placeholder={"00/00"}
                            onChange={(event) => setLastName(event.target.value)}
                        />
                        <Input
                            text={"CVV*"}
                            type={"text"}
                            id={"cvv"}
                            name={"cvv"}
                            placeholder={"0000"}
                            onChange={(event) => setLastName(event.target.value)}
                        />
                    </div>
                </div>

                <BtnPrimary onClick={(event) => BtnPrimaryHandle(event)}>
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