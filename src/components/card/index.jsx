import styles from "./styles.module.css"
import { baseUrl } from "../../rest/index.js"
import { Button } from "../button/index.jsx"
import { useEffect, useState } from "react"
import { Modal } from "../modal/index.jsx"

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
                <img className={styles.img} src={baseUrl + pizza.img} alt="poster" loading="lazy"/>
                <h3 className={styles.title}>{pizza.name}</h3>
                <p className={styles.description}>{pizza.description}</p>
                <p className={styles.price}>от {pizza.sizes[0].price} ₽</p>
                <Button>Подробнее</Button>
            </div>
            {isModal &&
                <Modal setIsModal={setIsModal}>
                    <h2>{pizza.name}</h2>
                </Modal>
            }
        </>
    )
}