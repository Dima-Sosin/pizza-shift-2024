import { PageHeader } from "./components/page-header/index.jsx"
import { Navigate, Route, Routes } from "react-router-dom"
import { MainPage } from "./pages/main-page.jsx"
import { ProfilePage } from "./pages/profile-page.jsx"
import { OrdersPage } from "./pages/orders-page.jsx"
import { CartPage } from "./pages/cart-page.jsx"


export const App = () => {

    return (<>
        <PageHeader />
        <Routes>
            <Route path="/">
                <Route index element={<Navigate to="pizzas" replace />} />
                <Route path="pizzas" element={<MainPage />} />
                <Route path="profile" element={<ProfilePage />} />
                <Route path="orders" element={<OrdersPage />} />
                <Route path="cart" element={<CartPage />} />
            </Route>
        </Routes>
    </>)
}
