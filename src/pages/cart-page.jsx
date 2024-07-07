import { createContext, useState } from "react"
import { Purchases } from "../components/purchases/index.jsx"
import { DataEntry } from "../components/data-entry/index.jsx"
import { BankCard } from "../components/bank-card/index.jsx"

export const PageContext = createContext('purchases');

export const CartPage = () => {
    const [page, setPage] = useState("purchases")

    return (
        <div className="page">
            <div className="container">
                <PageContext.Provider value={{page, setPage}}>
                    {page === "purchases" && <Purchases />}
                    {page === "dataEntry" && <DataEntry />}
                    {page === "bankCard" && <BankCard />}
                </PageContext.Provider>
            </div>
        </div>
    )
}