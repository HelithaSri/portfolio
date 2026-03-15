import styles from './SectionHeader.module.css';

interface SectionHeaderProps {
    num: string;
    title: string;
    count?: string;
}

export default function SectionHeader({ num, title, count }: SectionHeaderProps) {
    return (
        <div className={styles.secHead}>
            <span className={styles.secNum}>{num}</span>
            <h2>{title}</h2>
            <div className={styles.line} />
            {count && <div className={styles.count}>{count}</div>}
        </div>
    );
}
