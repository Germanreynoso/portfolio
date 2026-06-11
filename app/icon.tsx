import { ImageResponse } from 'next/og'

// Favicon: monograma "GR" claro sobre blueprint, con marco de plano técnico.
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
          background: '#181f2d',
          border: '3px solid #5b8fdb',
          color: '#ecf0f6',
          fontSize: 30,
          fontWeight: 700,
          letterSpacing: '-0.04em',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        GR
        <div
          style={{
            position: 'absolute',
            right: 4,
            top: 4,
            width: 8,
            height: 8,
            background: '#e08a4e',
          }}
        />
      </div>
    ),
    { ...size },
  )
}
