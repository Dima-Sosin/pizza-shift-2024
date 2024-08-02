import { createContext, useState } from "react"

import { PageLayout } from "@components/PageLayout/PageLayout.jsx"

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
        <PageLayout>
            <PageContext.Provider value={{ setStage }}>{Stages[stage]}</PageContext.Provider>
        </PageLayout>
    )
}
