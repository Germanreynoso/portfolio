import { ImageResponse } from 'next/og'

// Favicon propio: monograma "GR" en violeta del branding.
export const size = { width: 64, height: 64 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '14px',
          background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
          color: '#ffffff',
          fontSize: 30,
          fontWeight: 700,
          letterSpacing: '-0.04em',
          fontFamily: 'sans-serif',
        }}
      >
        GR
      </div>
    ),
    { ...size },
  )
}
