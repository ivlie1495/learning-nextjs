// 3. Inline Styles - styles written directly via the style attribute
export default function CardInline() {
  return (
    <div style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: 24 }}>
      <h3 style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>
        Inline Styles
      </h3>
      <p style={{ color: '#6b7280', marginBottom: 16 }}>
        Styles applied directly using the style attribute.
      </p>
      <button
        style={{
          background: '#dc2626',
          color: 'white',
          padding: '8px 16px',
          borderRadius: 6,
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Click
      </button>
    </div>
  )
}
