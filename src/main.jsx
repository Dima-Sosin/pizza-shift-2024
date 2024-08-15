import "./index.css"

import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"

import { api } from "@api"
import { PageHeader } from "@components/PageHeader/PageHeader.jsx"
import store from "@store/store"

import { CartPage } from "./pages/cart-page/cart-page.jsx"
import { CatalogPage } from "./pages/catalog-page/catalog-page.jsx"
import { ErrorPage } from "./pages/error-page/error-page.jsx"
import { OrdersPage } from "./pages/orders-page/orders-page.jsx"
import { ProfilePage } from "./pages/profile-page/profile-page.jsx"

const router = createBrowserRouter([
    {
        path: "/",
        element: <PageHeader />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <Navigate to="/catalog" replace={true} />
            },
            {
                path: "catalog",
                element: <CatalogPage />,
                loader: async () => {
                    return await api.get("/pizza/catalog").then((data) => data)
                }
            },
            {
                path: "profile",
                element: <ProfilePage />,
                loader: async () => {
                    return await api
                        .get("/users/session", {}, localStorage.getItem("token"))
                        .then((data) => data)
                }
            },
            {
                path: "orders",
                element: <OrdersPage />,
                loader: async () => {
                    return await api
                        .get("/pizza/orders", {}, localStorage.getItem("token"))
                        .then((data) => data)
                }
            },
            {
                path: "cart",
                element: <CartPage />,
                loader: async () => {
                    return await api
                        .get("/users/session", {}, localStorage.getItem("token"))
                        .then((data) => data)
                }
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
)
