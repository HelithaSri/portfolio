'use client';

import { useEffect, useRef } from 'react';
import SectionHeader from '../ui/SectionHeader';
import styles from './Skills.module.css';

const skillCards = [
    {
        category: 'Languages',
        tags: [
            { label: 'Java', primary: true },
            { label: 'SQL', primary: true },
            { label: 'Python', primary: false },
            { label: 'Dart', primary: false },
        ],
    },
    {
        category: 'Frameworks',
        tags: [
            { label: 'Spring Boot', primary: true },
            { label: 'Spring Security', primary: true },
            { label: 'Spring MVC', primary: false },
            { label: 'Hibernate/JPA', primary: false },
            { label: 'JUnit', primary: false },
            { label: 'Flutter', primary: false },
        ],
    },
    {
        category: 'Backend & Infra',
        tags: [
            { label: 'REST APIs', primary: true },
            { label: 'SOAP', primary: false },
            { label: 'Microservices', primary: true },
            { label: 'Nginx', primary: false },
            { label: 'Docker', primary: false },
            { label: 'Linux', primary: false },
            { label: 'CI/CD', primary: false },
        ],
    },
    {
        category: 'Tools & Platforms',
        tags: [
            { label: 'MySQL', primary: false },
            { label: 'PostgreSQL', primary: false },
            { label: 'AWS', primary: false },
            { label: 'Postman', primary: false },
            { label: 'Swagger', primary: false },
            { label: 'Git', primary: false },
            { label: 'Jira', primary: false },
        ],
    },
];

export default function Skills() {
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
        <section id="skills" className={styles.fadeSection} ref={ref}>
            <SectionHeader num="01." title="Skills & tech stack" count="18 technologies" />
            <div className={styles.skillGrid}>
                {skillCards.map((card) => (
                    <div className={styles.skillCard} key={card.category}>
                        <div className={styles.skillCat}>{card.category}</div>
                        <div className={styles.tagCloud}>
                            {card.tags.map((tag) => (
                                <span
                                    key={tag.label}
                                    className={`${styles.tag} ${tag.primary ? styles.primary : ''}`}
                                >
                                    {tag.label}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
