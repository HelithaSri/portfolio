import styles from './Stats.module.css';

export default function Stats() {
    return (
        <div className={styles.statRow}>
            <div className={styles.stat}>
                <div className={styles.statNum}>3+</div>
                <div className={styles.statLabel}>years experience</div>
            </div>
            <div className={styles.stat}>
                <div className={styles.statNum}>10+</div>
                <div className={styles.statLabel}>devs mentored</div>
            </div>
            <div className={styles.stat}>
                <div className={`${styles.statNum} ${styles.statNumSmall}`}>
                    Colombo
                    <br />
                    remote-ready
                </div>
                <div className={styles.statLabel}>location</div>
            </div>
        </div>
    );
}
