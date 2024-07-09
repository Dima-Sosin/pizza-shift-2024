import './index.css'

import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { PageHeader } from "./components/PageHeader/PageHeader.jsx"
import { CartPage } from "./pages/cart-page/cart-page.jsx"
import { CatalogPage } from "./pages/catalog-page/catalog-page.jsx"
import { OrdersPage } from "./pages/orders-page/orders-page.jsx"
import { ProfilePage } from "./pages/profile-page/profile-page.jsx"
import { GET } from "./rest-api/index.js"
import store from "./store/store"

const router = createBrowserRouter([
    {
        path: "/",
        element: <PageHeader />,
        children: [
            {
                path: "catalog",
                element: <CatalogPage />,
                loader: () => {
                    return GET("/pizza/catalog").then(data => data)
                }
            },
            {
                path: "profile",
                element: <ProfilePage />,
                loader: () => {
                    return GET("/users/session", {}, localStorage.getItem("token")).then(data => data)
                }
            },
            {
                path: "orders",
                element: <OrdersPage />,
                loader: () => {
                    return GET("/pizza/orders", {}, localStorage.getItem("token")).then(data => data)
                }
            },
            {
                path: "cart",
                element: <CartPage />,
                loader: () => {
                    return GET("/users/session", {}, localStorage.getItem("token")).then(data => data)
                }

            }
        ]
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
)
