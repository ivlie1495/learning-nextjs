import { describe, it, expect } from 'vitest'

import { add, subtract, isEven } from '../../utils/math'

describe('Tambah', () => {
  it('2 + 2 = 4', () => {
    expect(add(2, 2)).toBe(4)
  })

  it('3 + 3 = 6', () => {
    expect(add(3, 3)).toBe(6)
  })
})

describe('Kurang', () => {
  it('2 - 2 = 0', () => {
    expect(subtract(2, 2)).toBe(0)
  })

  it('3 - 3 = 0', () => {
    expect(subtract(3, 3)).toBe(0)
  })
})

describe('Ganjil or Genap', () => {
  it('2 adalah genap', () => {
    expect(isEven(2)).toBe(true)
  })
})
