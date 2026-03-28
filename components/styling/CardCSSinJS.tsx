// 4. CSS-in-JS - style objects defined in JavaScript
const styles = {
  card: {
    border: '1px solid #e5e7eb',
    borderRadius: 8,
    padding: 24,
  } as React.CSSProperties,
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  } as React.CSSProperties,
  desc: {
    color: '#6b7280',
    marginBottom: 16,
  } as React.CSSProperties,
  btn: {
    background: '#9333ea',
    color: 'white',
    padding: '8px 16px',
    borderRadius: 6,
    border: 'none',
    cursor: 'pointer',
  } as React.CSSProperties,
}

export default function CardCSSinJS() {
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>CSS-in-JS</h3>
      <p style={styles.desc}>
        Style objects defined as JS constants.
      </p>
      <button style={styles.btn}>Click</button>
    </div>
  )
}
