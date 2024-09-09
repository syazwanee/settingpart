import styles from "./setting.module.css";

const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                {children} {/* Render children components here */}
            </div>
        </div>
    );
}

export default Layout;
