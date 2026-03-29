import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Helitha Praveen — Backend Software Engineer',
        short_name: 'HelithaSri',
        description: 'Backend engineer specialising in Java, Spring Boot & Fintech',
        start_url: '/',
        display: 'standalone',
        theme_color: '#0d1117',
        background_color: '#0d1117',
        icons: [
            {
                src: '/web-app-manifest-192x192.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'maskable',
            },
            {
                src: '/web-app-manifest-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any',
            },
            {
                src: '/web-app-manifest-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable',
            },
        ],
    }
}