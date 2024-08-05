import { createContext, useState } from "react"

import { PageLayout } from "@components/PageLayout/PageLayout.jsx"

import { OrderDetails } from "./OrderDetails/OrderDetails.jsx"
import { Orders } from "./Orders/Orders"

export const PageContext = createContext("orders")
export const IdContext = createContext(0)

export const OrdersPage = () => {
    const [stage, setStage] = useState("orders")
    const [id, setId] = useState(0)
    const Stages = {
        orders: <Orders />,
        history: <OrderDetails orderId={id} />
    }

    return (
        <PageLayout>
            <PageContext.Provider value={{ setStage }}>
                <IdContext.Provider value={{ setId }}>{Stages[stage]}</IdContext.Provider>
            </PageContext.Provider>
        </PageLayout>
    )
}
