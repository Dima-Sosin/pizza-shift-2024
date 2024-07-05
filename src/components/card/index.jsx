import styles from "./styles.module.css"
import { baseUrl } from "../../rest_api/index.js"
import { BtnPrimary } from "../buttons/btn-primary.jsx"
import { useEffect, useState } from "react"
import { PizzaModal } from "../modal/pizza-modal.jsx"


//Компонент карточки пиццы на на главной странице
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
                <BtnPrimary>Подробнее</BtnPrimary>
            </div>
            {isModal &&
                <PizzaModal pizza={pizza} setIsModal={setIsModal}/>
            }
        </>
    )
}