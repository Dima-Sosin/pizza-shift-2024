import { createContext, useState } from "react"
import { ShoppingCart } from "./ShoppingCart/ShoppingCart.jsx"
import { PersonData } from "./PersonData/PersonData.jsx"
import { BankCard } from "./BankCard/BankCard.jsx"

export const PageContext = createContext('purchases');

export const CartPage = () => {
    const [stage, setStage] = useState("purchases")
    const Stages = {
        "purchases": <ShoppingCart/>,
        "dataEntry": <PersonData />,
        "bankCard": <BankCard />
    }
    return (
        <div className="page">
            <div className="container">
                <PageContext.Provider value={{setStage}}>
                    {Stages[stage]}
                </PageContext.Provider>
            </div>
        </div>
    )
}