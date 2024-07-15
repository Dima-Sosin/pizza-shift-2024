import { useLoaderData } from "react-router-dom"

import { PizzaCard } from "./PizzaCard/PizzaCard.jsx"

export const CatalogPage = () => {
    const pizzas = useLoaderData().catalog
    return (
        <div className="page">
            <div className="container">
                <h2>Каталог</h2>
                <ul className="cards">
                    {pizzas.map((pizza) => (
                        <li key={pizza.id}>
                            <PizzaCard pizza={pizza} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}