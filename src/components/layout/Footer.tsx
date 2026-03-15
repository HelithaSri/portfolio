import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            built with <span className={styles.heart}>♥</span> by helitha praveen
            &nbsp;·&nbsp; open to work
        </footer>
    );
}
