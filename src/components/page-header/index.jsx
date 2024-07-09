import styles from "./styles.module.css"
import logo from "../../assets/logo.svg"
import { Link, Outlet } from "react-router-dom"
import { useState } from "react"
import { Modals } from "./modals.jsx"

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
                                <img src={logo} alt="логотип сайта pizza shift" />
                            </Link>
                            <Link className={styles.block} to="/profile">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="transparent"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M16 8.571a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-1.5 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M4 18.343v2.228h16v-2.228a4 4 0 0 0-2.596-3.745l-.137-.052a15 15 0 0 0-10.534 0l-.137.052A4 4 0 0 0 4 18.343m3.26-2.392a13.5 13.5 0 0 1 9.48 0l.138.051a2.5 2.5 0 0 1 1.622 2.341v.728h-13v-.728a2.5 2.5 0 0 1 1.622-2.34z"
                                          fill="currentColor" />
                                </svg>
                                <span className={styles.link}>Профиль</span>
                            </Link>
                            <Link className={styles.block} to="/orders">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="transparent"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M15.924 16.695a.74.74 0 0 0 .025-1.075L12.7 12.372v-5.05a.75.75 0 0 0-1.5 0v5.236a1 1 0 0 0 .293.707l3.406 3.407c.28.28.732.29 1.025.024"
                                        fill="currentColor" />
                                    <path
                                        d="M12 22.571a9.7 9.7 0 0 1-3.875-.788 10.1 10.1 0 0 1-3.187-2.15 10.1 10.1 0 0 1-2.15-3.187 9.7 9.7 0 0 1-.788-3.9q0-2.05.788-3.875a10 10 0 0 1 2.15-3.175A10.3 10.3 0 0 1 8.124 3.36a9.7 9.7 0 0 1 3.9-.788q2.05 0 3.875.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175a9.7 9.7 0 0 1 .788 3.9 9.7 9.7 0 0 1-.788 3.875 10.3 10.3 0 0 1-2.137 3.188 10 10 0 0 1-3.175 2.15 9.7 9.7 0 0 1-3.9.787m0-1.5q3.55 0 6.025-2.488t2.475-6.012q0-3.55-2.475-6.025T12 4.071q-3.525 0-6.012 2.475Q3.5 9.021 3.5 12.571q0 3.525 2.488 6.013T12 21.07"
                                        fill="currentColor" />
                                </svg>
                                <span className={styles.link}>Заказы</span>
                            </Link>
                        </div>
                        <div className={styles.right}>
                            <Link className={styles.block} to="/cart">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="transparent"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.858 4.403h1.684c.752 0 1.129 0 1.412.204.283.205.402.561.64 1.275l.588 1.764"
                                        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path
                                        d="M17.992 18.456H7.776c-.156 0-.235 0-.296-.007a1.08 1.08 0 0 1-.937-1.3 3 3 0 0 1 .088-.283c.056-.167.083-.25.114-.325a2.16 2.16 0 0 1 1.836-1.323c.08-.005.167-.005.342-.005h5.826"
                                        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                        strokeLinejoin="round" />
                                    <path
                                        d="M14.402 15.213h-3.287c-1.384 0-2.076 0-2.616-.357-.542-.357-.814-.992-1.36-2.264l-.182-.425c-.875-2.043-1.312-3.063-.832-3.793.482-.728 1.593-.728 3.814-.728h5.707c2.486 0 3.729 0 4.198.807.468.808-.149 1.887-1.382 4.044l-.306.538c-.607 1.062-.911 1.594-1.415 1.886-.503.292-1.115.292-2.34.292Z"
                                        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path
                                        d="M17.451 22.24a1.081 1.081 0 1 0 0-2.163 1.081 1.081 0 0 0 0 2.162m-9.728.001a1.081 1.081 0 1 0 0-2.163 1.081 1.081 0 0 0 0 2.162"
                                        fill="currentColor" />
                                </svg>
                                <span className={styles.link}>Корзина</span>
                            </Link>
                            <div className={styles.block}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="transparent"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M14.47 20.896a.675.675 0 0 0-.674-.675H4.824a.5.5 0 0 1-.5-.5v-14.3a.5.5 0 0 1 .5-.5h8.972a.675.675 0 1 0 0-1.35H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.796a.675.675 0 0 0 .675-.675m-1.575-8.685a.63.63 0 0 0 0 1.26h5.546l-2.171 2.215a.693.693 0 0 0 .99.97l3.054-3.115a1 1 0 0 0 0-1.4L17.26 9.026a.693.693 0 1 0-.99.97l2.171 2.215z"
                                        fill="currentColor" />
                                </svg>
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
            {isModal && <Modals onClose={() => setIsModal(false)}/>}
            <Outlet />
        </>
    )
}