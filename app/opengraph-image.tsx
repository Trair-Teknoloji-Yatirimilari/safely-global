import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
export const alt = 'SAFELY - Check-in. Stay connected. Feel safe.'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'system-ui',
        }}
      >
        {/* Shield Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
          }}
        >
          <svg
            width="200"
            height="200"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L4 6v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V6l-8-4z"
              fill="#7dd3fc"
            />
            <path
              d="M9 12l2 2 4-4"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 80,
            fontWeight: 'bold',
            marginBottom: 20,
            letterSpacing: '-0.02em',
          }}
        >
          SAFELY
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 36,
            fontWeight: 'normal',
            opacity: 0.9,
            textAlign: 'center',
            maxWidth: 900,
          }}
        >
          Check-in. Stay connected. Feel safe.
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
