import type { Metadata } from 'next';
import styles from './privacy.module.css';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Privacy Policy — Helitha Praveen',
    description:
        'Privacy policy for helithasri.dev — learn how your data is handled on this portfolio website.',
};

export default function PrivacyPage() {
    return (
        <main className={styles.container}>
            <Link href="/" className={styles.backLink}>
                ← back to portfolio
            </Link>

            <h1 className={styles.title}>Privacy Policy</h1>
            <p className={styles.updated}>Last updated: March 28, 2025</p>

            <section className={styles.section}>
                <h2>Introduction</h2>
                <p>
                    Welcome to <strong>helithasri.dev</strong> (&quot;this website&quot;), the personal
                    portfolio of <strong>Helitha Praveen</strong>. Your privacy matters, and this
                    policy explains what information is collected when you visit this website, how it
                    is used, and your rights regarding that information.
                </p>
            </section>

            <section className={styles.section}>
                <h2>Information Collected</h2>

                <h3>Analytics Data</h3>
                <p>
                    This website may use third-party analytics services (such as Google Analytics or
                    Vercel Analytics) to understand how visitors interact with the site. These
                    services may collect:
                </p>
                <ul>
                    <li>Pages visited and time spent on each page</li>
                    <li>Referring website or source</li>
                    <li>Browser type, device type, and operating system</li>
                    <li>Approximate geographic location (country/region level)</li>
                    <li>Screen resolution and viewport size</li>
                </ul>
                <p>
                    This data is collected in aggregate form and is not used to personally identify
                    individual visitors.
                </p>

                <h3>Contact Information</h3>
                <p>
                    If you choose to contact me via the email address, phone number, or WhatsApp
                    link provided on this site, any information you share in that communication is
                    handled directly through those respective platforms and is not stored on this
                    website.
                </p>
            </section>

            <section className={styles.section}>
                <h2>Cookies</h2>
                <p>
                    This website may use cookies or similar technologies through third-party
                    analytics services. These are small text files stored on your device that help
                    analyse web traffic. You can control cookie preferences through your browser
                    settings.
                </p>
            </section>

            <section className={styles.section}>
                <h2>Third-Party Links</h2>
                <p>
                    This website contains links to external sites such as GitHub, LinkedIn, and
                    project demo pages. These third-party sites have their own privacy policies, and
                    I am not responsible for their content or practices. I encourage you to review
                    the privacy policies of any external sites you visit.
                </p>
            </section>

            <section className={styles.section}>
                <h2>Data Sharing</h2>
                <p>
                    I do not sell, trade, or otherwise transfer your personal information to third
                    parties. Analytics data may be processed by third-party analytics providers
                    solely for the purpose of understanding website usage patterns.
                </p>
            </section>

            <section className={styles.section}>
                <h2>Your Rights</h2>
                <p>You have the right to:</p>
                <ul>
                    <li>Opt out of analytics tracking by using browser extensions or settings</li>
                    <li>Request information about any data associated with your visit</li>
                    <li>Request deletion of any personally identifiable data, if applicable</li>
                </ul>
            </section>

            <section className={styles.section}>
                <h2>Changes to This Policy</h2>
                <p>
                    This privacy policy may be updated from time to time. Any changes will be
                    reflected on this page with an updated &quot;Last updated&quot; date.
                </p>
            </section>

            <section className={styles.section}>
                <h2>Contact</h2>
                <p>
                    If you have any questions about this privacy policy, you can reach me at:{' '}
                    <a href="mailto:helitha.pravin@gmail.com" className={styles.link}>
                        helitha.pravin@gmail.com
                    </a>
                </p>
            </section>
        </main>
    );
}
