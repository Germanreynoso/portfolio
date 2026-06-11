import { ImageResponse } from 'next/og'

// Apple touch icon: monograma "GR" claro sobre blueprint, con marco de plano técnico.
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
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
          border: '8px solid #5b8fdb',
          color: '#ecf0f6',
          fontSize: 84,
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
            right: 12,
            top: 12,
            width: 20,
            height: 20,
            background: '#e08a4e',
          }}
        />
      </div>
    ),
    { ...size },
  )
}
