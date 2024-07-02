import styles from "./styles.module.css"
import { baseUrl } from "../../rest/index.js"
import { Button } from "../button/index.jsx"
import { useEffect, useState } from "react"
import { Modal } from "../modal/index.jsx"
import { Toppings } from "../toppings/index.jsx"

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
                <h3 className={styles.title}>{pizza.name}</h3>
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

                                <h2>{pizza.name}</h2>

                                <p className={styles.p}>
                                    <span className={styles.span}>Калории:</span> {pizza.calories}
                                </p>
                                <p className={styles.p}>
                                    <span className={styles.span}>Белки:</span> {pizza.protein}
                                    <span className={styles.span}> Жиры:</span> {pizza.totalFat}
                                    <span className={styles.span}> Углеводы:</span> {pizza.carbohydrates}
                                </p>
                                <p className={styles.p}>
                                    {pizza.isGlutenFree && (<div className={styles.highlight}>Без глютена</div>)}
                                    {pizza.isVegetarian && (<div className={styles.highlight}>Вегетарианская</div>)}
                                    {pizza.isHit && (<span className={styles.highlight}>Хит продаж</span>)}
                                    {pizza.isNew && (<span className={styles.highlight}>Новое предложение</span>)}
                                </p>

                                <div className={styles.sizes}>
                                    {pizza.sizes.map((size, i) => (
                                        <div key={i} className={styles.size}>
                                            <input
                                                type="radio"
                                                id={size.name}
                                                name="size"
                                                onClick={() => {}}
                                            />
                                            <label htmlFor={size.name}>
                                                {size.name}
                                            </label>
                                        </div>
                                    ))}
                                </div>

                                <p className={styles.section_title}>Ингредиенты</p>
                                <Toppings toppings={pizza.ingredients}/>

                                <p className={styles.section_title}>Добавить по вкусу</p>
                                <Toppings toppings={pizza.toppings}/>

                            </div>
                            <Button>Добавить в корзину</Button>
                        </div>
                    </div>
                </Modal>
            }
        </>
    )
}