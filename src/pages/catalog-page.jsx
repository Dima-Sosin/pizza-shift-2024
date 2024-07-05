import { useEffect, useState } from "react"
import { Cards } from "../components/cards/index.jsx"
import { GET } from "../rest-api/index.js"

//Страница каталога пицц
export const CatalogPage = () => {
    const[pizzas, setPizzas] = useState([])

    useEffect(() => {
        GET("/pizza/catalog").then(data => setPizzas(data.catalog))
    }, [])

    return(
        <div className="page">
            <div className="container">
                <Cards pizzas={pizzas}/>
            </div>
        </div>
    )
}