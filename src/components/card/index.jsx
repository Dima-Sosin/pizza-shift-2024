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
        console.log(pizza)
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

                                <InputRadio arr={pizza.sizes} name={"sizes"}/>
                                <InputRadio arr={pizza.doughs} name={"doughs"}/>


                                <p className={styles.section_title}>Ингредиенты</p>
                                <Ingredients ingredients={pizza.ingredients}/>

                                <p className={styles.section_title}>Добавить по вкусу</p>
                                <Ingredients ingredients={pizza.toppings}/>

                            </div>
                            <Button>Добавить в корзину</Button>
                        </div>
                    </div>
                </Modal>
            }
        </>
    )
}