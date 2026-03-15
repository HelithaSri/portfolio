'use client';

import { useEffect, useRef } from 'react';
import SectionHeader from '../ui/SectionHeader';
import styles from './Education.module.css';

const items = [
    {
        degree: 'B.Sc. (Hons) in Software Engineering (Top-Up)',
        date: '2024 – 2025',
        school: 'Cardiff Metropolitan University',
        recent: true,
        badges: [
            { label: '2.2 — Second Class Lower', grade: true },
            { label: 'Top-Up Degree', grade: false },
            { label: 'UK Accredited', grade: false },
        ],
    },
    {
        degree: 'Graduate Diploma in Software Engineering (GDSE)',
        date: '2021 – 2023',
        school: 'Institute of Software Engineering (IJSE) · Sri Lanka',
        recent: false,
        badges: [
            { label: 'Graduate Diploma', grade: true },
            { label: 'Full Stack', grade: false },
            { label: 'Software Engineering', grade: false },
        ],
    },
];

export default function Education() {
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
        <section id="education" className={styles.fadeSection} ref={ref}>
            <SectionHeader num="03." title="Education" count="2 qualifications" />
            <div className={styles.eduList}>
                <div className={styles.eduLine} />
                {items.map((item) => (
                    <div className={styles.eduItem} key={item.degree}>
                        <div
                            className={`${styles.eduDot} ${item.recent ? styles.recent : ''}`}
                        />
                        <div className={styles.eduCard}>
                            <div className={styles.eduHeader}>
                                <span className={styles.eduDegree}>{item.degree}</span>
                                <span className={styles.eduDate}>{item.date}</span>
                            </div>
                            <div className={styles.eduSchool}>{item.school}</div>
                            <div className={styles.eduMeta}>
                                {item.badges.map((b) => (
                                    <span
                                        key={b.label}
                                        className={`${styles.eduBadge} ${b.grade ? styles.grade : ''}`}
                                    >
                                        {b.label}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
