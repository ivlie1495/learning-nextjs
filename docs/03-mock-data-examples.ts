/**
 * MOCK DATA PATTERNS WITH VITEST
 * Examples of different mocking strategies
 */

// ============================================
// 1. MOCKING FETCH REQUESTS
// ============================================

// api/userService.ts
interface UserData {
  name: string;
  email: string;
}

interface User extends UserData {
  id: number;
  role: string;
}

export async function fetchUser(id: number): Promise<User> {
  const response = await fetch(`/api/users/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch user');
  }
  return response.json();
}

export async function createUser(userData: UserData): Promise<User> {
  const response = await fetch('/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  });
  if (!response.ok) {
    throw new Error('Failed to create user');
  }
  return response.json();
}

export async function updateUser(id: number, userData: Partial<UserData>): Promise<User> {
  const response = await fetch(`/api/users/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  });
  if (!response.ok) {
    throw new Error('Failed to update user');
  }
  return response.json();
}

// api/userService.test.ts
/*
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { fetchUser, createUser, updateUser } from './userService';

describe('User API Service', () => {
  beforeEach(() => {
    // Reset mocks before each test
    vi.clearAllMocks();
  });

  describe('fetchUser', () => {
    it('fetches user data successfully', async () => {
      const mockUser = {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        role: 'user'
      };

      global.fetch = vi.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockUser)
        })
      );

      const result = await fetchUser(1);

      expect(result).toEqual(mockUser);
      expect(fetch).toHaveBeenCalledWith('/api/users/1');
    });

    it('throws error when fetch fails', async () => {
      global.fetch = vi.fn(() =>
        Promise.resolve({
          ok: false,
          json: () => Promise.resolve({})
        })
      );

      await expect(fetchUser(1)).rejects.toThrow('Failed to fetch user');
    });

    it('throws error on network failure', async () => {
      global.fetch = vi.fn(() =>
        Promise.reject(new Error('Network error'))
      );

      await expect(fetchUser(1)).rejects.toThrow('Network error');
    });
  });

  describe('createUser', () => {
    it('creates a new user', async () => {
      const newUser = { name: 'Jane Doe', email: 'jane@example.com' };
      const createdUser = { id: 2, ...newUser };

      global.fetch = vi.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(createdUser)
        })
      );

      const result = await createUser(newUser);

      expect(result).toEqual(createdUser);
      expect(fetch).toHaveBeenCalledWith(
        '/api/users',
        expect.objectContaining({
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newUser)
        })
      );
    });
  });

  describe('updateUser', () => {
    it('updates existing user', async () => {
      const updates = { name: 'John Updated' };
      const updatedUser = { id: 1, name: 'John Updated', email: 'john@example.com' };

      global.fetch = vi.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(updatedUser)
        })
      );

      const result = await updateUser(1, updates);

      expect(result).toEqual(updatedUser);
      expect(fetch).toHaveBeenCalledWith(
        '/api/users/1',
        expect.objectContaining({
          method: 'PUT',
          body: JSON.stringify(updates)
        })
      );
    });
  });
});
*/

// ============================================
// 2. MOCKING MODULE DEPENDENCIES
// ============================================

// database/userDb.ts
export async function getUserFromDb(id: number): Promise<User> {
  // Simulated database call
  return { id, name: 'Real User', email: 'user@db.com', role: 'user' };
}

// services/userService.ts
import { getUserFromDb } from '../database/userDb';

interface EnhancedUser extends User {
  fullName: string;
  isActive: boolean;
}

export async function getUserWithEnhancedData(id: number): Promise<EnhancedUser> {
  const user = await getUserFromDb(id);
  return {
    ...user,
    fullName: user.name.toUpperCase(),
    isActive: true
  };
}

// services/userService.test.ts
/*
import { describe, it, expect, vi } from 'vitest';
import { getUserWithEnhancedData } from './userService';
import * as userDb from '../database/userDb';

vi.mock('../database/userDb');

describe('User Service with Mocked Database', () => {
  it('enhances user data from database', async () => {
    const mockUser = { id: 1, name: 'John Doe', email: 'john@db.com' };

    userDb.getUserFromDb.mockResolvedValue(mockUser);

    const result = await getUserWithEnhancedData(1);

    expect(result).toEqual({
      id: 1,
      name: 'John Doe',
      email: 'john@db.com',
      fullName: 'JOHN DOE',
      isActive: true
    });

    expect(userDb.getUserFromDb).toHaveBeenCalledWith(1);
  });
});
*/

// ============================================
// 3. MOCK DATA FACTORIES
// ============================================

// __mocks__/factories.ts
interface MockUser {
  id: number;
  name: string;
  email: string;
  role: string;
  createdAt: string;
  isActive: boolean;
}

interface MockPost {
  id: number;
  title: string;
  content: string;
  authorId: number;
  createdAt: string;
  likes: number;
}

interface MockComment {
  id: number;
  text: string;
  userId: number;
  postId: number;
  createdAt: string;
}

interface MockApiResponse<T> {
  ok: boolean;
  status: number;
  json: () => Promise<T>;
  text: () => Promise<string>;
}

export function createMockUser(overrides: Partial<MockUser> = {}): MockUser {
  return {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'user',
    createdAt: '2024-01-01',
    isActive: true,
    ...overrides
  };
}

export function createMockPost(overrides: Partial<MockPost> = {}): MockPost {
  return {
    id: 1,
    title: 'Test Post',
    content: 'This is a test post',
    authorId: 1,
    createdAt: '2024-01-01',
    likes: 0,
    ...overrides
  };
}

export function createMockComment(overrides: Partial<MockComment> = {}): MockComment {
  return {
    id: 1,
    text: 'Great post!',
    userId: 1,
    postId: 1,
    createdAt: '2024-01-01',
    ...overrides
  };
}

export function createMockApiResponse<T>(data: T, statusCode = 200): MockApiResponse<T> {
  return {
    ok: statusCode >= 200 && statusCode < 300,
    status: statusCode,
    json: () => Promise.resolve(data),
    text: () => Promise.resolve(JSON.stringify(data))
  };
}

// __tests__/userService.test.ts using factories
/*
import { describe, it, expect, vi } from 'vitest';
import { fetchUserPosts } from '../api/userService';
import {
  createMockUser,
  createMockPost,
  createMockApiResponse
} from '../__mocks__/factories';

describe('User Service with Mock Factories', () => {
  it('fetches user posts', async () => {
    const mockUser = createMockUser({ id: 1, name: 'Alice' });
    const mockPosts = [
      createMockPost({ id: 1, authorId: 1, title: 'First Post' }),
      createMockPost({ id: 2, authorId: 1, title: 'Second Post' })
    ];

    global.fetch = vi.fn(() =>
      createMockApiResponse(mockPosts)
    );

    const posts = await fetchUserPosts(mockUser.id);

    expect(posts).toHaveLength(2);
    expect(posts[0].title).toBe('First Post');
    expect(posts[1].title).toBe('Second Post');
  });

  it('handles error responses', async () => {
    global.fetch = vi.fn(() =>
      createMockApiResponse({ error: 'Not found' }, 404)
    );

    const response = await global.fetch('/api/users/999');
    expect(response.ok).toBe(false);
  });
});
*/

// ============================================
// 4. MOCKING TIMERS AND ASYNC OPERATIONS
// ============================================

// utils/timer.ts
export function delayedGreeting(name: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Hello, ${name}!`);
    }, 1000);
  });
}

export function retryOperation<T>(
  operation: () => Promise<T>,
  maxRetries = 3
): Promise<T> {
  return new Promise((resolve, reject) => {
    let attempts = 0;

    const attempt = () => {
      attempts++;
      operation()
        .then(resolve)
        .catch((error: Error) => {
          if (attempts < maxRetries) {
            setTimeout(attempt, 500);
          } else {
            reject(error);
          }
        });
    };

    attempt();
  });
}

// utils/timer.test.ts
/*
import { describe, it, expect, vi } from 'vitest';
import { delayedGreeting, retryOperation } from './timer';

describe('Timer utilities', () => {
  describe('delayedGreeting', () => {
    it('returns greeting after delay', async () => {
      vi.useFakeTimers();

      const promise = delayedGreeting('Alice');
      expect(promise).toBePending();

      vi.advanceTimersByTime(1000);
      const result = await promise;

      expect(result).toBe('Hello, Alice!');

      vi.useRealTimers();
    });
  });

  describe('retryOperation', () => {
    it('succeeds on first attempt', async () => {
      const operation = vi.fn().mockResolvedValue('Success');

      const result = await retryOperation(operation);

      expect(result).toBe('Success');
      expect(operation).toHaveBeenCalledTimes(1);
    });

    it('retries on failure and succeeds', async () => {
      vi.useFakeTimers();

      const operation = vi
        .fn()
        .mockRejectedValueOnce(new Error('Fail 1'))
        .mockRejectedValueOnce(new Error('Fail 2'))
        .mockResolvedValueOnce('Success');

      const promise = retryOperation(operation, 3);

      await vi.advanceTimersByTimeAsync(1000);
      const result = await promise;

      expect(result).toBe('Success');
      expect(operation).toHaveBeenCalledTimes(3);

      vi.useRealTimers();
    });

    it('fails after max retries', async () => {
      const operation = vi.fn().mockRejectedValue(new Error('Always fails'));

      await expect(retryOperation(operation, 2)).rejects.toThrow('Always fails');
      expect(operation).toHaveBeenCalledTimes(2);
    });
  });
});
*/

// ============================================
// 5. MOCKING LOCAL STORAGE
// ============================================

// utils/storage.ts
interface StoredUser {
  id: number;
  name: string;
  email?: string;
}

export function setUser(user: StoredUser): void {
  localStorage.setItem('user', JSON.stringify(user));
}

export function getUser(): StoredUser | null {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
}

export function clearUser(): void {
  localStorage.removeItem('user');
}

// utils/storage.test.ts
/*
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { setUser, getUser, clearUser } from './storage';

describe('Storage utilities', () => {
  beforeEach(() => {
    // Mock localStorage
    const store: Record<string, string> = {};

    global.localStorage = {
      getItem: (key: string) => store[key] || null,
      setItem: (key: string, value: string) => {
        store[key] = value.toString();
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        Object.keys(store).forEach(key => delete store[key]);
      }
    };
  });

  it('stores and retrieves user', () => {
    const mockUser = { id: 1, name: 'John', email: 'john@example.com' };

    setUser(mockUser);
    const retrieved = getUser();

    expect(retrieved).toEqual(mockUser);
  });

  it('returns null when no user stored', () => {
    expect(getUser()).toBeNull();
  });

  it('clears user from storage', () => {
    const mockUser = { id: 1, name: 'John' };

    setUser(mockUser);
    expect(getUser()).toEqual(mockUser);

    clearUser();
    expect(getUser()).toBeNull();
  });
});
*/
