'use client';

import { useEffect, useRef } from 'react';
import SectionHeader from '../ui/SectionHeader';
import styles from './Projects.module.css';

const LANG_COLORS: Record<string, { color: string; glow: string }> = {
    'Next.js': { color: '#ffffff', glow: 'rgba(255, 255, 255, 0.5)' }, // Crisp white
    'Flutter': { color: '#54c5f8', glow: 'rgba(84, 197, 248, 0.5)' },  // Light blue
    'Python': { color: '#ffd43b', glow: 'rgba(255, 212, 59, 0.5)' },   // Vibrant yellow
    'Java': { color: '#f89820', glow: 'rgba(248, 152, 32, 0.5)' },     // Orange
    'TypeScript': { color: '#3178c6', glow: 'rgba(49, 120, 198, 0.5)' }, // Blue
    'React': { color: '#61dafb', glow: 'rgba(97, 218, 251, 0.5)' },    // Cyan
    'default': { color: '#8b949e', glow: 'rgba(139, 148, 158, 0.5)' }, // Gray
};

const projects = [
    {
        name: 'De Silva Auto Tech',
        desc: 'Freelance — a bilingual business website for an automotive service company. Clean, fast, and fully deployed on Vercel.',
        lang: 'Next.js',
        tags: ['Next.js', 'Vercel', 'Freelance'],
        icon: (
            <svg viewBox="0 0 24 24" className={styles.projIconSvg}>
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18" />
                <path d="M9 21V9" />
            </svg>
        ),
        links: [
            { label: 'live site ↗', url: 'https://www.desilvaautotech.com/en', primary: true },
            { label: 'github ↗', url: 'https://github.com/HelithaSri/de-silva-auto-tech', primary: false }
        ]
    },
    {
        name: 'GhostLayer',
        desc: 'A lightweight macOS overlay that stays hidden during screen sharing & recording. Features sticky notes, images, grids, and privacy mode. Built fully with vibe coding via Cursor.',
        lang: 'Flutter',
        tags: ['Flutter', 'Swift', 'macOS', 'Vibe coded'],
        icon: (
            <svg viewBox="0 0 24 24" className={styles.projIconSvg}>
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
                <path d="M2 10h20" />
                <circle cx="7" cy="6.5" r="1" fill="var(--green)" stroke="none" />
            </svg>
        ),
        links: [
            { label: 'github ↗', url: 'https://github.com/HelithaSri/GhostLayer', primary: true }
        ]
    },
    {
        name: 'Gem Price Prediction',
        desc: 'Final year project — users enter gem attributes (cut, carat, clarity, etc.) into a form and the system returns a predicted market price in real-time using a trained ML model.',
        lang: 'Python',
        tags: ['Python', 'scikit-learn', 'Flask', 'React'],
        icon: (
            <svg viewBox="0 0 24 24" className={styles.projIconSvg}>
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
            </svg>
        ),
        links: [
            { label: 'github ↗', url: 'https://github.com/HelithaSri/Gem-Price-Prediction-System', primary: true }
        ]
    },
];

export default function Projects() {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        if ('IntersectionObserver' in window) {
            const obs = new IntersectionObserver(
                (entries) => {
                    entries.forEach((e) => {
                        if (e.isIntersecting) {
                            e.target.classList.add(styles.visible);
                            obs.unobserve(e.target);
                        }
                    });
                },
                { threshold: 0, rootMargin: '0px 0px -20px 0px' }
            );
            obs.observe(el);
            return () => obs.disconnect();
        } else {
            el.classList.add(styles.visible);
        }
    }, []);

    return (
        <section id="projects" className={styles.fadeSection} ref={ref}>
            <SectionHeader num="04." title="Projects" count="3 projects" />
            <div className={styles.projGrid}>
                {projects.map((p) => {
                    const langStyle = LANG_COLORS[p.lang] || LANG_COLORS['default'];
                    return (
                        <div className={styles.projCard} key={p.name}>
                            <div className={styles.projTop}>
                                <div className={styles.projIcon}>{p.icon}</div>
                                <div className={styles.projLang}>
                                    <span
                                        className={styles.projLangDot}
                                        style={{
                                            background: langStyle.color,
                                            boxShadow: `0 0 4px ${langStyle.glow}`
                                        }}
                                    />
                                    {p.lang}
                                </div>
                            </div>
                            <div className={styles.projName}>{p.name}</div>
                            <div className={styles.projDesc}>{p.desc}</div>
                            <div className={styles.projTags}>
                                {p.tags.map((t) => (
                                    <span key={t} className={styles.projTag}>
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <div className={styles.projLinks}>
                                {p.links.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`${styles.projLink} ${link.primary ? styles.primary : ''}`}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
