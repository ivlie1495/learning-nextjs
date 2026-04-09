import { describe, it, expect } from 'vitest'

import { isValidEmail } from '../../utils/emailValidation'

describe('Email Validation Positif Cases', () => {
  it('john@example.com', () => {
    expect(isValidEmail('john@example.com')).toBe(true)
  })

  it('john@gmail.com', () => {
    expect(isValidEmail('john@gmail.com')).toBe(true)
  })

  it('john@yahoo.com', () => {
    expect(isValidEmail('john@yahoo.com')).toBe(true)
  })
})

describe('Email Validation Negatif Cases', () => {
  it('john', () => {
    expect(isValidEmail('john')).toBe(false)
  })

  it('empty string', () => {
    expect(isValidEmail('')).toBe(false)
  })

  it('undefined', () => {
    expect(isValidEmail()).toBe(false)
  })
})

// Email john.doe@gmail.com -> data di database
// jangan hit api beneran atau connect database beneran
// jangan melakukan testing di production
// jika transaksi, kalo kita hit beneran, baerti transaksi nya kejadian beneran

// Email dummy.john.doe@gmail.com -> data buat di mock
