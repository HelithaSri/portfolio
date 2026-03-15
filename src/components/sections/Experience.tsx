'use client';

import { useEffect, useRef } from 'react';
import SectionHeader from '../ui/SectionHeader';
import styles from './Experience.module.css';

const roles = [
    {
        role: 'Software Engineer',
        date: 'Apr 2025 – Present',
        company: 'PayMedia · Colombo, Sri Lanka',
        active: true,
        bullets: [
            'Leading backend for live fintech products with core banking & payment API integrations',
            'Designed secure RESTful APIs for real-time transactions & fund transfers',
            'Mentored 10+ junior developers, improved code review turnaround & reduced recurring bugs',
            'Configured Nginx for reverse proxy, load balancing & SSL/TLS across UAT & production',
            'Drove architectural decisions ensuring 90–100% on-time delivery of critical releases',
        ],
    },
    {
        role: 'Associate Software Engineer',
        date: 'May 2023 – Apr 2025',
        company: 'PayMedia · Colombo, Sri Lanka',
        active: false,
        bullets: [
            'Integrated DirectPay IPG for secure card onboarding & tokenization',
            'Implemented Biller Switch API for real-time bill payments via bank accounts & stored cards',
            'Deployed Spring Boot apps across cloud and on-prem multi-tier architectures',
            'Built & maintained backend services for digital payment products across multiple core banking systems',
        ],
    },
    {
        role: 'Software Engineer Intern',
        date: 'Nov 2022 – Apr 2023',
        company: 'PayMedia · Colombo, Sri Lanka',
        active: false,
        bullets: [
            'Built RESTful services & micro-features for financial applications using Java & Spring Boot',
            'Collaborated with senior engineers to debug production issues & improve performance',
        ],
    },
];

export default function Experience() {
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
        <section id="experience" className={styles.fadeSection} ref={ref}>
            <SectionHeader num="02." title="Experience" count="3 roles · 3 yrs" />
            <div className={styles.expList}>
                <div className={styles.expLine} />
                {roles.map((r) => (
                    <div className={styles.expItem} key={r.role + r.date}>
                        <div
                            className={`${styles.expDot} ${r.active ? styles.active : ''}`}
                        />
                        <div className={styles.expCard}>
                            <div className={styles.expHeader}>
                                <span className={styles.expRole}>{r.role}</span>
                                <span className={styles.expDate}>{r.date}</span>
                            </div>
                            <div className={styles.expCompany}>{r.company}</div>
                            <ul className={styles.expBullets}>
                                {r.bullets.map((b) => (
                                    <li key={b}>{b}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
