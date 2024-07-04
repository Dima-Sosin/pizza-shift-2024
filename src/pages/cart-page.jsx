import { useState } from "react"
import { Purchases } from "../components/purchases/index.jsx"
import { DataEntry } from "../components/data-entry/index.jsx"
import { BankCard } from "../components/bank-card/index.jsx"

//Страница корзины
export const CartPage = () => {
    const [isPurchases, setIsPurchases] = useState(true)
    const [isDataEntry, setIsDataEntry] = useState(false)
    const [isBankCard, setIsBankCard] = useState(false)

    const handleChange = (nextPage) => {
        if(nextPage === "purchases"){
            setIsPurchases(true)
            setIsDataEntry(false)
            setIsBankCard(false)
        }
        if(nextPage === "dataEntry"){
            setIsPurchases(false)
            setIsDataEntry(true)
            setIsBankCard(false)
        }
        if(nextPage === "bankCard"){
            setIsPurchases(false)
            setIsDataEntry(false)
            setIsBankCard(true)
        }
    }

    return (
        <div className="page">
            <div className="container">
                {isPurchases && <Purchases onClick={handleChange}/>}
                {isDataEntry && <DataEntry onClick={handleChange}/>}
                {isBankCard && <BankCard onClick={handleChange}/>}
            </div>
        </div>
    )
}