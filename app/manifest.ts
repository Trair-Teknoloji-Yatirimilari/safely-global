import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'SAFELY - Check-in. Stay connected. Feel safe.',
    short_name: 'SAFELY',
    description: 'Sevdiklerinizle bağlantıda kalın. Akıllı check-in, konum paylaşımı ve anlık bildirimler ile güvende hissedin.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1e3a8a',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
