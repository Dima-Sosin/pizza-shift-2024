import { useLoaderData } from "react-router-dom"

export const OrdersPage = () => {
    const orders = useLoaderData().orders
    console.log(orders)
    return(
        <div className="page">
            <div className="container">

            </div>
        </div>
    )
}