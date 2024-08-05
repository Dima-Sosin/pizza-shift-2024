import styles from "./CatalogPage.module.css"

import { useLoaderData } from "react-router-dom"

import { PageLayout } from "@components/PageLayout/PageLayout.jsx"

import { PizzaCard } from "./PizzaCard/PizzaCard"

export const CatalogPage = () => {
    const pizzas = useLoaderData().catalog
    return (
        <PageLayout>
            <h1>Каталог</h1>
            <ul className={styles.cards}>
                {pizzas.map((pizza) => (
                    <li key={pizza.id}>
                        <PizzaCard pizza={pizza} />
                    </li>
                ))}
            </ul>
        </PageLayout>
    )
}
