import { describe, it, expect } from 'vitest'

import { capitalize } from '../../utils/capitalize'

describe('capitalize', () => {
  it('string undefined', () => {
    expect(capitalize()).toBe('')
  })

  it('string empty', () => {
    expect(capitalize('')).toBe('')
  })

  it('string hello', () => {
    expect(capitalize('hello')).toBe('Hello')
  })
})
