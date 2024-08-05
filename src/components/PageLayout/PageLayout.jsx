import styles from "./PageLayout.module.css"

export const PageLayout = ({ children }) => (
    <div className={styles.page}>
        <div className={styles.container}>{children}</div>
    </div>
)
