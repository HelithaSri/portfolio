'use client';

import { useEffect, useRef } from 'react';
import SectionHeader from '../ui/SectionHeader';
import styles from './Contact.module.css';
import { trackEvent } from '@/lib/analytics';

const contacts = [
    {
        href: 'mailto:helitha.pravin@gmail.com',
        label: '// email',
        value: 'helitha.pravin@gmail.com',
        filled: false,
        gaLabel: 'email',
        icon: (
            <svg viewBox="0 0 24 24" className={styles.icon}>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
            </svg>
        ),
    },
    {
        href: 'https://wa.me/94767059199',
        label: '// whatsapp',
        value: '+94 767 059 199',
        filled: true,
        target: '_blank',
        gaLabel: 'whatsapp',
        icon: (
            <svg viewBox="0 0 24 24" className={styles.icon}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.534 5.862L.054 23.454a.5.5 0 0 0 .598.598l5.538-1.534A11.96 11.96 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.96 9.96 0 0 1-5.031-1.356l-.361-.214-3.741.982.998-3.648-.235-.374A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
        ),
    },
    {
        href: 'tel:+94767059199',
        label: '// phone',
        value: '+94 767 059 199',
        filled: false,
        gaLabel: 'phone',
        icon: (
            <svg viewBox="0 0 24 24" className={styles.icon}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 11.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l1.27-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
        ),
    },
    {
        href: 'https://linkedin.com/in/helithasri',
        label: '// linkedin',
        value: 'linkedin.com/in/helithasri',
        filled: false,
        target: '_blank',
        gaLabel: 'linkedin',
        icon: (
            <svg viewBox="0 0 24 24" className={styles.icon}>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
            </svg>
        ),
    },
    {
        href: 'https://github.com/HelithaSri',
        label: '// github',
        value: 'github.com/HelithaSri',
        filled: true,
        target: '_blank',
        gaLabel: 'github',
        icon: (
            <svg viewBox="0 0 24 24" className={styles.icon}>
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
        ),
    },
];

export default function Contact() {
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
        <section id="contact" className={styles.fadeSection} ref={ref}>
            <SectionHeader num="06." title="Contact" />

            <div className={styles.contactCallout}>
                <h3 className={styles.contactHeadline}>
                    Let&apos;s build something{' '}
                    <span className={styles.contactHighlight}>great</span>{' '}
                    together.
                </h3>
                <p className={styles.contactSubtitle}>
                    Open to full-time backend roles and freelance projects. I&apos;m most
                    excited about fintech, payments infrastructure, and systems that need
                    to be both fast and correct.
                </p>
            </div>

            <div className={styles.contactGrid}>
                {contacts.map((c) => (
                    <a
                        key={c.label}
                        className={styles.contactItem}
                        href={c.href}
                        target={c.target}
                        rel={c.target ? 'noopener noreferrer' : undefined}
                        onClick={() =>
                            trackEvent('contact_click', {
                                event_category: 'engagement',
                                event_label: c.gaLabel,
                            })
                        }
                    >
                        <div
                            className={`${styles.contactItemIcon} ${c.filled ? styles.filled : ''}`}
                        >
                            {c.icon}
                        </div>
                        <div>
                            <div className={styles.contactItemLabel}>{c.label}</div>
                            <div className={styles.contactItemVal}>{c.value}</div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
