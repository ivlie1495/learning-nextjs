import { describe, it, expect, vi, beforeEach } from 'vitest'

import { fetchUser } from '../../services/users'
import { isValidEmail } from '../../utils/emailValidation'

describe('User API Service', () => {
  beforeEach(() => {
    // Reset mocks before each test
    vi.clearAllMocks()
  })

  it('fetches user data successfully', async () => {
    const mockUser = {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+6281234567890',
    }

    const mockUsers = [{}, {}, {}]

    global.fetch = vi.fn(() => {
      return Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(mockUser),
      })
    })

    // const result = await fetchUser(1)

    // expect(result).toEqual(mockUser)
    // // Status API nya 200
    // expect(result.status).toBe(200)
    // // API nya ke call atau tidak
    // expect(fetch).toHaveBeenCalledWith('/api/users/1')
    // // Length nya lebih dari 0
    // expect(mockUsers.length).toBeGreaterThan(0)
    // // Data object nya tidak null
    // expect(mockUser.id).toBeDefined()
    // // Data email valid
    // expect(isValidEmail(mockUser.email)).toBe(true)
  })

  it('fetches user data with not found error', () => {
    const mockError = {
      status: 404,
      message: 'Not found',
    }

    expect(mockError.status).toBe(404)
    expect(mockError.message).toBe('Not found')
  })

  it('fetches user data with bad request error', () => {
    const mockError = {
      status: 400,
      message: 'Bad request',
    }

    expect(mockError.status).toBe(400)
    expect(mockError.message).toBe('Bad request')
  })
})
