import { createContext, useState } from "react"

import { DebitCard } from "./DebitCard/DebitCard.jsx"
import { PersonData } from "./PersonData/PersonData.jsx"
import { ShoppingCart } from "./ShoppingCart/ShoppingCart.jsx"

export const PageContext = createContext("purchases")

export const CartPage = () => {
    const [stage, setStage] = useState("purchases")
    const Stages = {
        purchases: <ShoppingCart />,
        dataEntry: <PersonData />,
        bankCard: <DebitCard />
    }
    return (
        <div className="page">
            <div className="container">
                <PageContext.Provider value={{ setStage }}>
                    {Stages[stage]}
                </PageContext.Provider>
            </div>
        </div>
    )
}
