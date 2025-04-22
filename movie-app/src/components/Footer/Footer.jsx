import styles from './Footer.module.css';
function Footer(){
    return(
        <div className={styles.container}>
            <footer className={styles.footer}>
                <h2 className={styles.footer__tittle}>Movie App</h2>
                <p className={styles.footer__author}>Created By Aufa Billah</p>
            </footer>
        </div>
    );
}

export default Footer;