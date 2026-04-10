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
})
