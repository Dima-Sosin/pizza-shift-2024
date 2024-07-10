import { useState } from "react"
import { Link, Outlet } from "react-router-dom"

import { CartIcon } from "../../assets/CartIcon.jsx"
import { ExitIcon } from "../../assets/ExitIcon.jsx"
import { LogoIcon } from "../../assets/LogoIcon.jsx"
import { TimeIcon } from "../../assets/TimeIcon.jsx"
import { UserIcon } from "../../assets/UserIcon.jsx"
import { Modals } from "./Modals.jsx"
import styles from "./PageHeader.module.css"

export const PageHeader = () => {
    const [isModal, setIsModal] = useState(false)
    const [isAuth, setIsAuth] = useState(!!(localStorage.getItem("token")))
    const onClick = () => {
        if(isAuth){
            localStorage.removeItem("token")
        }else{
            setIsModal(true)
        }
        setIsAuth(!isAuth)
    }
    return (
        <>
            <div className="page">
                <div className="container">
                    <header className={styles.page_header}>
                        <div className={styles.left}>
                            <Link to="/catalog">
                                <LogoIcon />
                            </Link>
                            <Link className={styles.block} to="/profile">
                                <UserIcon />
                                <span className={styles.link}>Профиль</span>
                            </Link>
                            <Link className={styles.block} to="/orders">
                                <TimeIcon />
                                <span className={styles.link}>Заказы</span>
                            </Link>
                        </div>
                        <div className={styles.right}>
                            <Link className={styles.block} to="/cart">
                                <CartIcon />
                                <span className={styles.link}>Корзина</span>
                            </Link>
                            <div className={styles.block}>
                                <ExitIcon />
                                <span
                                    className={styles.link}
                                    onClick={() => onClick()}
                                >
                                {isAuth ? "Выйти" : "Войти"}
                            </span>
                            </div>
                        </div>
                    </header>
                </div>
            </div>
            {isModal && <Modals onClose={() => {
                setIsModal(false)
                document.body.style.overflow = "unset"
            }}/>}
            <Outlet />
        </>
    )
}