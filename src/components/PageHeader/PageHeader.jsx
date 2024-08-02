import styles from "./PageHeader.module.css"

import { useState } from "react"
import { Link, Outlet } from "react-router-dom"

import { CartIcon } from "@assets/CartIcon"
import { ExitIcon } from "@assets/ExitIcon"
import { LogoIcon } from "@assets/LogoIcon"
import { PizzaIcon } from "@assets/PizzaIcon.jsx"
import { TimeIcon } from "@assets/TimeIcon"
import { UserIcon } from "@assets/UserIcon"
import { LogOn } from "@components/LogOn/LogOn"
import { LogOut } from "@components/LogOut/LogOut"

export const PageHeader = () => {
    const [isModal, setIsModal] = useState(false)
    const [isAuth, setIsAuth] = useState(!!localStorage.getItem("token"))

    const Modal = {
        true: <LogOut onClose={() => setIsModal(false)} setIsAuth={setIsAuth} />,
        false: <LogOn onClose={() => setIsModal(false)} setIsAuth={setIsAuth} />
    }

    return (
        <>
            <div className={styles.page}>
                <div className={styles.container}>
                    <header className={styles.page_header}>
                        <div className={styles.left}>
                            <Link className={styles.link} to="/catalog">
                                <LogoIcon className={styles.logo_icon} />
                                <PizzaIcon className={styles.pizza_icon} />
                                <span className={`${styles.label} ${styles.pizza}`}>Пицца</span>
                            </Link>
                            <Link className={styles.link} to="/profile">
                                <UserIcon />
                                <span className={styles.label}>Профиль</span>
                            </Link>
                            <Link className={styles.link} to="/orders">
                                <TimeIcon />
                                <span className={styles.label}>Заказы</span>
                            </Link>
                        </div>

                        <div className={styles.right}>
                            <Link className={styles.link} to="/cart">
                                <CartIcon />
                                <span className={styles.label}>Корзина</span>
                            </Link>
                            <div className={`${styles.link} ${styles.exit}`}>
                                <ExitIcon />
                                <span className={styles.label} onClick={() => setIsModal(true)}>
                                    {isAuth ? "Выйти" : "Войти"}
                                </span>
                            </div>
                        </div>
                    </header>
                </div>
            </div>
            {isModal && Modal[isAuth]}
            <Outlet />
        </>
    )
}
