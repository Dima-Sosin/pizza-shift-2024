import styles from "./styles.module.css"
import { baseUrl } from "../../rest_api/index.js"
import { Button } from "../button/index.jsx"
import { useEffect, useState } from "react"
import { Modal } from "../modal/index.jsx"
import { Ingredients } from "../ingredients/index.jsx"
import { InputRadio } from "../input-radio/index.jsx"

{/* eslint-disable react/prop-types */}
export const Card = ({pizza}) => {
    const[isModal, setIsModal] = useState(false)

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
            <div className={styles.card} onClick={() => setIsModal(true)}>
                <img className={styles.img} src={baseUrl + pizza.img} alt="pizza image" loading="lazy"/>
                <h3 className={styles.card_title}>{pizza.name}</h3>
                <p className={styles.description}>{pizza.description}</p>
                <p className={styles.price}>от {pizza.sizes[0].price} ₽</p>
                <Button>Подробнее</Button>
            </div>
            {isModal &&
                <Modal setIsModal={setIsModal}>
                    <div className={styles.modal}>
                        <img className={styles.img} src={baseUrl + pizza.img} alt="pizza image"/>
                        <div className={styles.right}>
                            <div className={styles.info}>

                                <h2 className={styles.modal_title}>
                                    {pizza.name}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path fill="#000" fillRule="evenodd" d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"/>
                                        <path fill="#000" d="M12 11a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1" />
                                        <path fill="#000" d="M13.5 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                                    </svg>
                                    <span className={styles.tooltip}>
                                        <span className={styles.tooltip_title}>Пищевая ценность на 100 г:</span><br/>
                                        Энерг. ценность: {pizza.calories} ккал<br/>
                                        Белки: {pizza.protein}<br/>
                                        Жиры: {pizza.totalFat}<br/>
                                        Углеводы: {pizza.carbohydrates}<br/><br/>
                                        Вес: {pizza.sodium}
                                    </span>
                                </h2>

                                <p className={styles.p}>
                                    {pizza.description}
                                </p>
                                <p className={styles.p}>
                                    {pizza.isGlutenFree && (<div className={styles.highlight}>Без глютена</div>)}
                                    {pizza.isVegetarian && (<div className={styles.highlight}>Вегетарианская</div>)}
                                    {pizza.isHit && (<span className={styles.highlight}>Хит продаж</span>)}
                                    {pizza.isNew && (<span className={styles.highlight}>Новое предложение</span>)}
                                </p>
                                <p className={styles.p}>
                                    <InputRadio arr={pizza.sizes} name={"sizes"}/>
                                    <InputRadio arr={pizza.doughs} name={"doughs"}/>
                                </p>

                                <p className={styles.section_title}>Добавить по вкусу</p>
                                <Ingredients ingredients={pizza.toppings} name={"toppings"}/>

                            </div>
                            <Button>Добавить в корзину</Button>
                        </div>
                    </div>

                </Modal>
            }
        </>
    )
}