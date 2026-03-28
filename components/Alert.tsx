'use client'

// Alert component (Exercise slide 11) - show/close an alert
// Demonstrates: Props, passing children, event handling
import { ReactNode } from 'react'

interface AlertProps {
  children: ReactNode
  onClose: () => void
}

export default function Alert({ children, onClose }: AlertProps) {
  return (
    <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 px-4 py-3 rounded flex items-center justify-between">
      <span>{children}</span>
      <button
        onClick={onClose}
        className="text-yellow-800 hover:text-yellow-900 font-bold ml-4"
      >
        &times;
      </button>
    </div>
  )
}
