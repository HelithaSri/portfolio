import { sendGAEvent } from '@next/third-parties/google';

export function trackEvent(
    eventName: string,
    params: Record<string, string>,
) {
    if (typeof window !== 'undefined') {
        sendGAEvent('event', eventName, params);
    }
}
