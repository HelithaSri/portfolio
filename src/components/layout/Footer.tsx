import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            built with <span className={styles.heart}>♥</span> by helitha praveen
            &nbsp;·&nbsp; open to work
            &nbsp;·&nbsp;
            <Link href="/privacy" className={styles.privacyLink}>
                Privacy Policy
            </Link>
        </footer>
    );
}
