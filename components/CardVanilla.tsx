// 1. Vanilla CSS - import a separate CSS file
import '@/components/CardVanilla.css'

export default function CardVanilla() {
  return (
    <div className="card-vanilla">
      <h3 className="card-vanilla-title">Vanilla CSS</h3>
      <p className="card-vanilla-desc">
        Styles written in a separate .css file and imported.
      </p>
      <button className="card-vanilla-btn">Click</button>
    </div>
  )
}
