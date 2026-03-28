'use client'

// Reusable Button Component (Exercise slide 11)
// Demonstrates: Props (slide 8), passing children (slide 10)
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick: () => void
  color?: 'primary' | 'danger' | 'success'
}

export default function Button({
  children,
  onClick,
  color = 'primary',
}: ButtonProps) {
  const colorClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700',
    danger: 'bg-red-600 hover:bg-red-700',
    success: 'bg-green-600 hover:bg-green-700',
  }

  return (
    <button
      onClick={onClick}
      className={`${colorClasses[color]} text-white px-4 py-2 rounded`}
    >
      {children}
    </button>
  )
}
