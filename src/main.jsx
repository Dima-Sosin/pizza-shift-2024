import ReactDOM from 'react-dom/client'
import './index.css'
import store from "./store/store"
import { Provider } from "react-redux"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { CatalogPage } from "./pages/catalog-page.jsx"
import { ProfilePage } from "./pages/profile-page.jsx"
import { OrdersPage } from "./pages/orders-page.jsx"
import { PageHeader } from "./components/page-header/index.jsx"
import { CartPage } from "./pages/cart-page.jsx"

const router = createBrowserRouter([
    {
        path: "/",
        element: <PageHeader />,
        children: [
            {
                path: "catalog",
                element: <CatalogPage />,
            },
            {
                path: "profile",
                element: <ProfilePage />,
            },
            {
                path: "orders",
                element: <OrdersPage />
            },
            {
                path: "cart",
                element: <CartPage />
            }
        ]
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
)
