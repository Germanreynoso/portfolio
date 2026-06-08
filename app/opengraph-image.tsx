import { ImageResponse } from 'next/og'

export const alt =
  'Germán Reynoso — Desarrollo Web, Automatización con IA y SaaS'
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
            'radial-gradient(circle at 78% -10%, #5b21b6 0%, transparent 55%), radial-gradient(circle at 0% 110%, #4c1d95 0%, transparent 45%), #0d0a14',
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
              borderRadius: '14px',
              background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
              color: '#fff',
              fontSize: '24px',
              fontWeight: 700,
            }}
          >
            GR
          </div>
          <span style={{ fontSize: '26px', color: '#c4b5fd' }}>
            Germán Reynoso
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div
            style={{
              fontSize: '60px',
              fontWeight: 700,
              lineHeight: 1.1,
              maxWidth: '900px',
            }}
          >
            Digitalizo procesos, automatizo tareas y construyo productos web
            escalables.
          </div>
          <div
            style={{
              fontSize: '40px',
              fontWeight: 700,
              background: 'linear-gradient(90deg, #a855f7, #c4b5fd)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Web · Automatización con IA · SaaS
          </div>
        </div>

        <div style={{ fontSize: '26px', color: '#a1a1aa' }}>
          Soluciones reales para clientes públicos y privados.
        </div>
      </div>
    ),
    { ...size },
  )
}
