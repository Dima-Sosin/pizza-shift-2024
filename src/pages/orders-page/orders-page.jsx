import { createContext, useState } from "react"

import { History } from "./History/History"
import { Orders } from "./Orders/Orders"

export const PageContext = createContext("orders")
export const IdContext = createContext(0)

export const OrdersPage = () => {
    const [stage, setStage] = useState("orders")
    const [id, setId] = useState(0)
    const Stages = {
        orders: <Orders />,
        history: <History orderId={id} />
    }

    return (
        <div className="page">
            <div className="container">
                <PageContext.Provider value={{ setStage }}>
                    <IdContext.Provider value={{ setId }}>{Stages[stage]}</IdContext.Provider>
                </PageContext.Provider>
            </div>
        </div>
    )
}
