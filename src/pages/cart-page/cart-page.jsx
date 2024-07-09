import { createContext, useState } from "react"
import { Purchases } from "./purchases/index.jsx"
import { DataEntry } from "./data-entry/index.jsx"
import { BankCard } from "./bank-card/index.jsx"

export const PageContext = createContext('purchases');

export const CartPage = () => {
    const [stage, setStage] = useState("purchases")
    const Stages = {
        "purchases": <Purchases/>,
        "dataEntry": <DataEntry />,
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