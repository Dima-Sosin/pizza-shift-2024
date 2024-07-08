import { createContext, useState } from "react"
import { Purchases } from "../components/purchases/index.jsx"
import { DataEntry } from "../components/data-entry/index.jsx"
import { BankCard } from "../components/bank-card/index.jsx"

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