import { ImageResponse } from 'next/og'

export const alt = 'Germán Reynoso — Full Stack Developer · AI · Automatización · SaaS'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          background:
            'radial-gradient(circle at 75% -10%, #1e3a5f 0%, transparent 55%), #0a0a0a',
          color: '#fafafa',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '56px',
              height: '56px',
              borderRadius: '12px',
              background: '#3b82f6',
              color: '#fff',
              fontSize: '24px',
              fontWeight: 700,
            }}
          >
            GR
          </div>
          <span style={{ fontSize: '26px', color: '#a1a1aa' }}>
            Germán Reynoso
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ fontSize: '72px', fontWeight: 700, lineHeight: 1.05 }}>
            Full Stack Developer
          </div>
          <div
            style={{
              fontSize: '56px',
              fontWeight: 700,
              background: 'linear-gradient(90deg, #60a5fa, #a78bfa)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            AI · Automatización · SaaS
          </div>
        </div>

        <div style={{ fontSize: '28px', color: '#a1a1aa' }}>
          Productos web, automatizaciones inteligentes y SaaS con impacto real.
        </div>
      </div>
    ),
    { ...size },
  )
}
