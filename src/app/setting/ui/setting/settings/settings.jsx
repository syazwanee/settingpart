import styles from './settings.module.css'; // Corrected file name
import Image from 'next/image'; // Next.js image component

const Settings = () => {
    return (
        <div className={styles.container}>
            {/* Title Section */}
            <div className={styles.titleMain}>
                <label>Settings</label>
            </div>

            {/* First container with table */}
            <div className={styles.mainContainer}>
                <div className={styles.account}>
                    <label>Account</label>
                </div>
                <table className={styles.table}>
                    <tbody>
                        <tr>
                            <td>
                                <div className={styles.user}>First Name</div>
                                <div className={styles.box}>Wade</div> {/* Box with text */}
                            </td>
                            <td>
                                <div className={styles.user}>Last Name</div>
                                <div className={styles.box}>Warren</div> {/* Box with text */}
                            </td>
                            <td rowSpan="3"> {/* Image and button in the third column */}
                                <div className={styles.imgContainer}>
                                    <Image className={styles.img} src="/noavatar.png" alt="Avatar" width={100} height={100} />
                                    <button className={styles.buttonimg} type="button">Update</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className={styles.user}>Role</div>
                                <div className={styles.box}>Developer</div> {/* Box with text */}
                            </td>
                            <td>
                                <div className={styles.user}>Branch</div>
                                <div className={styles.box}>Abcd-123</div> {/* Box with text */}
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <div className={styles.user}>Email Address</div>
                                <div className={styles.box}>abcd@gmail.com</div> {/* Box with text */}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Second container with password and button */}
            <div className={styles.formContainer}>
                <div className={styles.row}>
                    <div className={styles.formGroup}>
                        <div className={styles.user}>Password</div>
                        <div className={styles.inputButtonWrapper}>
                            <div className={styles.box}>********</div> {/* Box with hidden password */}
                            <button type="button" className={styles.changePasswordBtn}>Change Password</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Third container with remove account section */}
            <div className={styles.formContainer}>
                <div className={styles.remove}>
                    <label>Remove Account</label>
                    <p className={styles.subText}>You can "Disable Account" to take a break from BE U</p>
                </div>
                <div className={styles.buttonsWrapper}>
                    <button className={styles.buttonone} type="button">Disable Account</button>
                    <button className={styles.buttonnd} type="button">Delete Account</button>
                </div>
            </div>
        </div>
    );
};

export default Settings;
