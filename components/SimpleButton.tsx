'use client'

interface SimpleButtonProps {
  label: string
  onClick: () => void
}

export function SimpleButton({ label, onClick }: SimpleButtonProps) {
  return <button onClick={onClick}>{label}</button>
}
