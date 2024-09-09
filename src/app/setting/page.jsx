import Layout from "./layout";
import Transactions from "./ui/setting/settings/settings";
import styles from "./setting.module.css";

const SettingPage = () => {
    return (
        <Layout>
            <div className={styles.content}>
                <h1 className={styles.title}></h1> {/* Place "Setting" text here */}
                <Transactions /> {/* Render Transactions component here */}
            </div>
        </Layout>
    );
}

export default SettingPage;
