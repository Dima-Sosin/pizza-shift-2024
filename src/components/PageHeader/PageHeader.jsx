import styles from "./PageHeader.module.css"

import { useState } from "react"
import { Link, Outlet } from "react-router-dom"

import { CartIcon } from "@assets/CartIcon"
import { ExitIcon } from "@assets/ExitIcon"
import { LogoIcon } from "@assets/LogoIcon"
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
            <div className={`page ${styles.header_line}`}>
                <div className="container">
                    <header className={styles.page_header}>
                        <div className={styles.left}>
                            <Link to="/catalog">
                                <LogoIcon />
                            </Link>
                            {isAuth && (
                                <>
                                    <Link className={styles.block} to="/profile">
                                        <UserIcon />
                                        <span className={styles.link}>Профиль</span>
                                    </Link>
                                    <Link className={styles.block} to="/orders">
                                        <TimeIcon />
                                        <span className={styles.link}>Заказы</span>
                                    </Link>
                                </>
                            )}
                        </div>
                        <div className={styles.right}>
                            <Link className={styles.block} to="/cart">
                                <CartIcon />
                                <span className={styles.link}>Корзина</span>
                            </Link>
                            <div className={styles.block}>
                                <ExitIcon />
                                <span className={styles.link} onClick={() => setIsModal(true)}>
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
