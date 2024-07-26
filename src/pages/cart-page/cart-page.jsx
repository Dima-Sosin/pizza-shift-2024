import { createContext, useState } from "react"

import { DebitCard } from "./DebitCard/DebitCard.jsx"
import { PersonData } from "./PersonData/PersonData.jsx"
import { ShoppingCart } from "./ShoppingCart/ShoppingCart.jsx"

export const PageContext = createContext("shoppingCart")

export const CartPage = () => {
    const [stage, setStage] = useState("shoppingCart")
    const Stages = {
        shoppingCart: <ShoppingCart />,
        personalData: <PersonData />,
        debitCard: <DebitCard />
    }
    return (
        <div className="page">
            <div className="container">
                <PageContext.Provider value={{ setStage }}>{Stages[stage]}</PageContext.Provider>
            </div>
        </div>
    )
}
