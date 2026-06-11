import { ImageResponse } from 'next/og'

export const alt =
  'Germán Reynoso — Desarrollo Web, Automatización con IA y SaaS'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const bg = '#181f2d' // blueprint profundo
const fg = '#ecf0f6' // líneas y texto claros
const blue = '#7aa6e6' // azul de ingeniería
const minio = '#e08a4e' // minio de señal

const cell = {
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '6px',
  padding: '16px 24px',
  borderRight: `1px solid ${fg}33`,
}
const cellLabel = {
  fontSize: '15px',
  letterSpacing: '0.16em',
  color: `${fg}80`,
  textTransform: 'uppercase' as const,
}
const cellValue = {
  fontSize: '20px',
  letterSpacing: '0.06em',
  color: fg,
  textTransform: 'uppercase' as const,
}

// Lámina de plano técnico en cianotipo: marco, meta superior y cajetín inferior.
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: bg,
          color: fg,
          fontFamily: 'sans-serif',
          padding: '40px',
          backgroundImage: `linear-gradient(${fg}0a 1px, transparent 1px), linear-gradient(90deg, ${fg}0a 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      >
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: `2px solid ${fg}`,
          }}
        >
          {/* meta de lámina */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '24px 40px',
              borderBottom: `1px solid ${fg}33`,
              fontSize: '20px',
              letterSpacing: '0.16em',
            }}
          >
            <span style={{ color: minio }}>LÁMINA A-01 / PORTADA</span>
            <span style={{ color: `${fg}80` }}>TUCUMÁN, ARGENTINA</span>
          </div>

          {/* titular */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              padding: '0 40px',
            }}
          >
            <div
              style={{
                fontSize: '76px',
                fontWeight: 700,
                lineHeight: 1.02,
                letterSpacing: '-0.02em',
                maxWidth: '980px',
              }}
            >
              Germán Reynoso
            </div>
            <div
              style={{
                fontSize: '34px',
                fontWeight: 600,
                color: blue,
              }}
            >
              Desarrollo Web · Automatización con IA · SaaS
            </div>
          </div>

          {/* cajetín */}
          <div
            style={{
              display: 'flex',
              borderTop: `1px solid ${fg}33`,
            }}
          >
            <div style={cell}>
              <span style={cellLabel}>Autor</span>
              <span style={cellValue}>Reynoso, G.</span>
            </div>
            <div style={cell}>
              <span style={cellLabel}>Clientes</span>
              <span style={cellValue}>Sector público y privado</span>
            </div>
            <div style={cell}>
              <span style={cellLabel}>Escala</span>
              <span style={cellValue}>1:1</span>
            </div>
            <div style={{ ...cell, borderRight: 'none' }}>
              <span style={cellLabel}>Estado</span>
              <span style={{ ...cellValue, color: minio }}>
                ● En producción
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
