import styles from './Navbar.module.css';
import Image from 'next/image'

const links = [
    { href: '#about', label: 'about' },
    { href: '#skills', label: 'skills' },
    { href: '#experience', label: 'experience' },
    { href: '#education', label: 'education' },
    { href: '#projects', label: 'projects' },
    { href: '#contact', label: 'contact' },
];

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <span className={styles.logoIcon}>
                <Image
                    src="/hp_logo_nobg.svg"
                    alt="Helitha Praveen logo"
                    width={24}
                    height={24}
                />
                ~/helitha-praveen $
            </span>

            <div className={styles.links}>
                {links.map((l) => (
                    <a key={l.href} href={l.href} className={styles.link}>
                        {l.label}
                    </a>
                ))}
            </div>
        </nav>
    );
}
