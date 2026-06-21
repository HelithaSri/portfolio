'use client';

import { useEffect, useRef, useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import styles from './Recommendations.module.css';
import { trackEvent } from '@/lib/analytics';
import recommendationData from '@/data/recommendations.json';

interface Recommendation {
    name: string;
    role: string;
    date: string;
    relationship: string;
    text: string;
    profileUrl?: string;
}

const recommendations: Recommendation[] = recommendationData;

function initials(name: string) {
    return name
        .split(/\s+/)
        .map((part) => part[0])
        .join('')
        .slice(0, 2)
        .toUpperCase();
}

export default function Recommendations() {
    const ref = useRef<HTMLElement>(null);
    const [expanded, setExpanded] = useState<string | null>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        if ('IntersectionObserver' in window) {
            const obs = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add(styles.visible);
                            obs.unobserve(entry.target);
                        }
                    });
                },
                { threshold: 0, rootMargin: '0px 0px -20px 0px' }
            );
            obs.observe(el);
            return () => obs.disconnect();
        }

        el.classList.add(styles.visible);
    }, []);

    return (
        <section id="recommendations" className={styles.fadeSection} ref={ref}>
            <SectionHeader
                num="05."
                title="Recommendations"
                count={`${recommendations.length} peer reviews`}
            />

            <div className={styles.intro}>
                <div>
                    <div className={styles.eyebrow}>$ cat peer-reviews.log</div>
                    <h3 className={styles.headline}>
                        What it&apos;s like to <span>work with me.</span>
                    </h3>
                    <p className={styles.subtitle}>
                        Feedback from people I&apos;ve worked with, shared publicly on
                        LinkedIn.
                    </p>
                </div>
                <a
                    className={styles.linkedinLink}
                    href="https://lk.linkedin.com/in/helithasri"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                        trackEvent('recommendations_link_click', {
                            event_category: 'engagement',
                            event_label: 'linkedin_recommendations',
                        })
                    }
                >
                    view on LinkedIn ↗
                </a>
            </div>

            <div className={styles.grid}>
                {recommendations.map((recommendation) => {
                    const isExpanded = expanded === recommendation.name;
                    const textId = `recommendation-${recommendation.name
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, '-')}`;

                    return (
                        <article className={styles.card} key={recommendation.name}>
                            <div className={styles.quoteMark} aria-hidden="true">
                                &ldquo;
                            </div>

                            <p
                                id={textId}
                                className={`${styles.quote} ${
                                    isExpanded ? styles.expanded : ''
                                }`}
                            >
                                {recommendation.text}
                            </p>

                            <button
                                type="button"
                                className={styles.toggle}
                                aria-expanded={isExpanded}
                                aria-controls={textId}
                                onClick={() => {
                                    setExpanded(
                                        isExpanded ? null : recommendation.name
                                    );
                                    if (!isExpanded) {
                                        trackEvent('recommendation_expand', {
                                            event_category: 'engagement',
                                            event_label: recommendation.name,
                                        });
                                    }
                                }}
                            >
                                {isExpanded ? 'collapse ↑' : 'read full review ↓'}
                            </button>

                            <div className={styles.author}>
                                {recommendation.profileUrl ? (
                                    <a
                                        className={styles.avatar}
                                        href={recommendation.profileUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${recommendation.name} on LinkedIn`}
                                    >
                                        {initials(recommendation.name)}
                                    </a>
                                ) : (
                                    <div className={styles.avatar}>
                                        {initials(recommendation.name)}
                                    </div>
                                )}

                                <div className={styles.authorInfo}>
                                    <div className={styles.name}>
                                        {recommendation.name}
                                    </div>
                                    <div
                                        className={styles.role}
                                        title={recommendation.role}
                                    >
                                        {recommendation.role}
                                    </div>
                                    <div className={styles.relationship}>
                                        {recommendation.date}
                                        {' · '}
                                        {recommendation.relationship}
                                    </div>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
