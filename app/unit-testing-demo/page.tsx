// Unit Testing Demo (Lesson 9)
// Shows Vitest setup, AAA pattern, JS function tests, and React component tests

export default function UnitTestingDemo() {
  return (
    <div className="px-6 py-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Unit Testing</h1>
      <p className="text-gray-500 mb-10">Writing Tests That Matter — powered by Vitest</p>

      {/* What is Unit Testing */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">What is Unit Testing?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Testing individual functions or components in isolation</li>
          <li>Verifying expected behavior with specific inputs</li>
          <li>Fast, isolated, and repeatable</li>
        </ul>
      </section>

      {/* AAA Pattern */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">The AAA Pattern</h2>
        <div className="grid grid-cols-3 gap-4 mb-4">
          {[
            { title: 'Arrange', desc: 'Set up test data and initial conditions' },
            { title: 'Act', desc: 'Execute the code being tested' },
            { title: 'Assert', desc: 'Verify the results match expectations' },
          ].map(({ title, desc }) => (
            <div key={title} className="border rounded-lg p-4">
              <h3 className="font-semibold text-blue-600 mb-1">{title}</h3>
              <p className="text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
        <pre className="bg-gray-900 text-green-400 text-sm rounded-lg p-4 overflow-x-auto">
{`const user = { name: 'John', age: 30 }  // Arrange
const result = getAdultStatus(user)      // Act
expect(result).toBe(true)               // Assert`}
        </pre>
      </section>

      {/* JS Function Test Example */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">JavaScript Unit Test Example</h2>
        <p className="text-sm text-gray-500 mb-3">
          See <code className="bg-gray-100 px-1 rounded">lib/math.ts</code> and{' '}
          <code className="bg-gray-100 px-1 rounded">lib/math.test.ts</code>
        </p>
        <pre className="bg-gray-900 text-green-400 text-sm rounded-lg p-4 overflow-x-auto">
{`// lib/math.ts
export function multiply(a: number, b: number) {
  return a * b
}
export function isPositive(num: number) {
  return num > 0
}

// lib/math.test.ts
import { describe, it, expect } from 'vitest'
import { multiply, isPositive } from './math'

describe('Math functions', () => {
  it('multiplies correctly', () => {
    expect(multiply(3, 4)).toBe(12)
  })

  it('identifies positive numbers', () => {
    expect(isPositive(5)).toBe(true)
    expect(isPositive(-5)).toBe(false)
  })
})`}
        </pre>
      </section>

      {/* React Component Test Example */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">React Unit Test Example</h2>
        <p className="text-sm text-gray-500 mb-3">
          See <code className="bg-gray-100 px-1 rounded">components/SimpleButton.tsx</code> and{' '}
          <code className="bg-gray-100 px-1 rounded">components/SimpleButton.test.tsx</code>
        </p>
        <pre className="bg-gray-900 text-green-400 text-sm rounded-lg p-4 overflow-x-auto">
{`// components/SimpleButton.tsx
export function SimpleButton({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>
}

// components/SimpleButton.test.tsx
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SimpleButton } from './SimpleButton'

describe('SimpleButton', () => {
  it('renders with correct label', () => {
    render(<SimpleButton label="Click me" onClick={() => {}} />)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('calls onClick when clicked', async () => {
    const onClick = vi.fn()
    const user = userEvent.setup()

    render(<SimpleButton label="Submit" onClick={onClick} />)

    await user.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalledOnce()
  })
})`}
        </pre>
      </section>

      {/* Run Tests */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Running Tests</h2>
        <pre className="bg-gray-900 text-green-400 text-sm rounded-lg p-4">
{`npm test`}
        </pre>
      </section>

      {/* Best Practices */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Best Practices</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Write clear, descriptive test names</li>
          <li>Test one thing per test (single responsibility)</li>
          <li>Use AAA pattern: Arrange, Act, Assert</li>
          <li>Mock external dependencies (APIs, databases)</li>
          <li>Use realistic mock data that matches production</li>
          <li>Aim for meaningful coverage, not 100%</li>
        </ul>
      </section>
    </div>
  )
}
