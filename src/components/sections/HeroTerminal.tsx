'use client';

import { useEffect, useRef } from 'react';
import styles from './HeroTerminal.module.css';
import Image from 'next/image';

type Line =
    | { type: 'cmd'; prompt: string; text: string }
    | { type: 'out'; cls: string; text: string }
    | { type: 'blank' }
    | { type: 'cursor' };

const lines: Line[] = [
    { type: 'cmd', prompt: 'helitha@portfolio:~$', text: ' whoami' },
    { type: 'out', cls: 'green', text: 'Helitha Praveen' },
    { type: 'out', cls: 'dim', text: 'Backend Software Engineer · Sri Lanka' },
    { type: 'blank' },
    { type: 'cmd', prompt: 'helitha@portfolio:~$', text: ' cat expertise.txt' },
    { type: 'out', cls: '', text: '> Java & Spring Boot  ·  3+ years' },
    { type: 'out', cls: '', text: '> Fintech & Core Banking APIs' },
    { type: 'out', cls: '', text: '> Scalable Microservices & REST' },
    { type: 'out', cls: '', text: '> Nginx · Docker · Linux · AWS' },
    { type: 'blank' },
    { type: 'cmd', prompt: 'helitha@portfolio:~$', text: ' cat status.txt' },
    { type: 'out', cls: 'green', text: '[ OPEN TO WORK ]  full-time & freelance' },
    { type: 'cursor' },
];

function typeText(
    el: HTMLElement,
    text: string,
    speed: number,
    checkActive: () => boolean,
    cb: () => void
) {
    let j = 0;
    const iv = setInterval(() => {
        if (!checkActive()) {
            clearInterval(iv);
            return;
        }
        el.textContent += text[j++];
        if (j >= text.length) {
            clearInterval(iv);
            setTimeout(() => {
                if (checkActive()) cb();
            }, 200);
        }
    }, speed);
}

export default function HeroTerminal() {
    const termRef = useRef<HTMLDivElement>(null);
    const idxRef = useRef(0); // Kept to preserve hook order
    const startedRef = useRef(false); // Kept to preserve hook order

    useEffect(() => {
        const term = termRef.current;
        if (!term) return;

        let active = true;
        const checkActive = () => active;

        term.innerHTML = '';
        let currentIdx = 0;

        function addLine(line: Line) {
            if (!active || !term) return;

            if (line.type === 'blank') {
                const d = document.createElement('div');
                d.className = styles.tBlank;
                term.appendChild(d);
                next();
                return;
            }

            if (line.type === 'cursor') {
                const d = document.createElement('div');
                d.className = styles.tLine;
                d.innerHTML = `<span class="${styles.prompt}">helitha@portfolio:~$</span> <span class="${styles.cursor}"></span>`;
                term.appendChild(d);
                setTimeout(() => {
                    if (active) d.classList.add(styles.show);
                }, 30);
                return;
            }

            const d = document.createElement('div');
            d.className = styles.tLine;

            if (line.type === 'cmd') {
                d.innerHTML = `<span class="${styles.prompt}">${line.prompt}</span><span class="${styles.tCmd}"></span>`;
                term.appendChild(d);
                setTimeout(() => {
                    if (!active) return;
                    d.classList.add(styles.show);
                    typeText(d.querySelector(`.${styles.tCmd}`) as HTMLElement, line.text, 40, checkActive, next);
                }, 30);
            } else {
                const clsMap: Record<string, string> = {
                    green: styles.green,
                    dim: styles.dim,
                    '': '',
                };
                const extraCls = clsMap[line.cls] ?? '';
                d.innerHTML = `<span class="${styles.tOutput} ${extraCls}">${line.text}</span>`;
                term.appendChild(d);
                setTimeout(() => {
                    if (!active) return;
                    d.classList.add(styles.show);
                    setTimeout(() => {
                        if (active) next();
                    }, 100);
                }, 30);
            }
        }

        function next() {
            if (active && currentIdx < lines.length) {
                addLine(lines[currentIdx++]);
            }
        }

        setTimeout(() => {
            if (active) next();
        }, 500);

        return () => {
            active = false;
        };
    }, []);

    return (
        <div className={styles.terminalWindow}>

            {/* watermark inside the terminal */}
            <div className={styles.watermark}>
                <Image src="/hp_logo_nobg.svg" alt="" width={250} height={250} />
            </div>

            <div className={styles.terminalBar}>
                <div className={`${styles.dot} ${styles.red}`} />
                <div className={`${styles.dot} ${styles.yellow}`} />
                <div className={`${styles.dot} ${styles.greenDot}`} />
                <span className={styles.terminalTitle}>helitha@portfolio ~ bash</span>
            </div>
            <div className={styles.terminalBody} ref={termRef} />

        </div>
    );
}
