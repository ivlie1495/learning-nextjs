'use client'

// Consuming ThemeContext — child reads context without props
import { useTheme, ThemeProvider } from '@/components/global-state/ThemeContext'

function ThemeDisplay() {
  const { theme, setTheme } = useTheme()

  return (
    <div
      className={`p-4 rounded ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`}
    >
      <p className="text-sm mb-2">
        Current theme: <span className="font-bold">{theme}</span>
      </p>
      <button
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
      >
        Toggle Theme
      </button>
    </div>
  )
}

export default function ThemeDemo() {
  return (
    <ThemeProvider>
      <ThemeDisplay />
    </ThemeProvider>
  )
}
