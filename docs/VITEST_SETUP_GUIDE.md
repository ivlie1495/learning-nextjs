# Unit Testing with Vitest - Complete Setup Guide

## Quick Start (5 minutes)

### 1. Install Vitest

```bash
npm install -D vitest @vitest/ui
```

### 2. Configure package.json

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage"
  }
}
```

### 3. Create Your First Test

Create a file named `math.ts`:
```typescript
export function add(a: number, b: number): number {
  return a + b;
}
```

Create a file named `math.test.ts`:
```typescript
import { describe, it, expect } from 'vitest';
import { add } from './math';

describe('add', () => {
  it('adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });
});
```

### 4. Run Tests

```bash
npm test
```

---

## Project Structure

Recommended folder structure for your tests:

```
project/
├── src/
│   ├── utils/
│   │   ├── math.ts
│   │   └── math.test.ts          # Test next to source
│   ├── components/
│   │   ├── Button.tsx
│   │   └── Button.test.tsx
│   └── api/
│       ├── userService.ts
│       └── userService.test.ts
├── __tests__/                     # Or separate tests folder
│   ├── unit/
│   │   └── math.test.ts
│   ├── integration/
│   │   └── api.test.ts
│   └── mocks/
│       └── factories.ts
├── vitest.config.ts              # Optional config
└── package.json
```

---

## Vitest Configuration (Optional)

Create `vitest.config.ts` in your project root:

```typescript
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,                    // Use describe, it, expect without imports
    environment: 'jsdom',             // For React/DOM testing
    setupFiles: './vitest.setup.ts'  // Setup file for shared config
  }
});
```

Create `vitest.setup.ts`:

```typescript
import '@testing-library/jest-dom';
import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';

// Cleanup after each test
afterEach(() => {
  cleanup();
});

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});
```

---

## Essential Packages for React Testing

```bash
npm install -D @testing-library/react @testing-library/user-event
```

---

## Test Writing Patterns

### Pattern 1: Describe Blocks for Organization

```typescript
describe('Math functions', () => {
  describe('add', () => {
    it('adds positive numbers', () => {});
    it('adds negative numbers', () => {});
    it('handles zero', () => {});
  });

  describe('multiply', () => {
    it('multiplies numbers', () => {});
  });
});
```

### Pattern 2: Arrange-Act-Assert

```typescript
it('should calculate tax correctly', () => {
  // Arrange: Set up test data
  const price: number = 100;
  const taxRate: number = 0.1;

  // Act: Execute the function
  const result = calculateTax(price, taxRate);

  // Assert: Verify the result
  expect(result).toBe(10);
});
```

### Pattern 3: Test Multiple Scenarios

```typescript
describe('isValidEmail', () => {
  // Valid cases
  it.each([
    'user@example.com',
    'test.email@domain.co.uk',
    'name+tag@example.com'
  ])('accepts valid email: %s', (email: string) => {
    expect(isValidEmail(email)).toBe(true);
  });

  // Invalid cases
  it.each([
    'invalid',
    'no@domain',
    '@example.com'
  ])('rejects invalid email: %s', (email: string) => {
    expect(isValidEmail(email)).toBe(false);
  });
});
```

---

## Common Matchers Reference

### Equality
```typescript
expect(value).toBe(5)           // Exact match (===)
expect(obj).toEqual({a: 1})     // Deep equality
```

### Truthiness
```typescript
expect(value).toBeTruthy()      // Truthy value
expect(value).toBeFalsy()       // Falsy value
expect(value).toBeNull()        // Null
expect(value).toBeUndefined()   // Undefined
expect(value).toBeDefined()     // Defined
```

### Numbers
```typescript
expect(value).toBeGreaterThan(5)
expect(value).toBeLessThan(10)
expect(value).toBeGreaterThanOrEqual(5)
expect(value).toBeLessThanOrEqual(10)
expect(0.1 + 0.2).toBeCloseTo(0.3)
```

### Strings
```typescript
expect(text).toMatch(/hello/)
expect(text).toContain('world')
expect(text).toHaveLength(5)
```

### Arrays
```typescript
expect(arr).toContain('item')
expect(arr).toHaveLength(3)
expect(arr).toEqual([1, 2, 3])
```

### Functions
```typescript
const mockFn = vi.fn();
expect(mockFn).toHaveBeenCalled()
expect(mockFn).toHaveBeenCalledWith(arg1, arg2)
expect(mockFn).toHaveBeenCalledTimes(2)
expect(mockFn).toHaveBeenCalledOnce()
expect(mockFn).toHaveReturnedWith(value)
```

---

## Mocking Patterns

### Mock a Function

```typescript
import { vi } from 'vitest';

const mockFn = vi.fn();
const mockFnWithReturn = vi.fn().mockReturnValue(42);
const mockFnAsync = vi.fn().mockResolvedValue({ id: 1 });
```

### Mock a Module

```typescript
vi.mock('./database', () => ({
  getUser: vi.fn()
}));

import { getUser } from './database';

getUser.mockResolvedValue({ id: 1, name: 'John' });
```

### Mock Fetch

```typescript
global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ id: 1 })
  })
);
```

### Mock localStorage

```typescript
const store: Record<string, string> = {};
global.localStorage = {
  getItem: (key: string) => store[key] || null,
  setItem: (key: string, value: string) => { store[key] = value; },
  removeItem: (key: string) => { delete store[key]; },
  clear: () => { Object.keys(store).forEach(k => delete store[k]); }
};
```

---

## Hooks for Test Setup/Cleanup

```typescript
import { describe, it, expect, beforeEach, afterEach, beforeAll, afterAll, vi } from 'vitest';

describe('API tests', () => {
  let mockServer: ReturnType<typeof setupMockServer>;

  // Runs once before all tests in this describe block
  beforeAll(() => {
    mockServer = setupMockServer();
  });

  // Runs before each test
  beforeEach(() => {
    vi.clearAllMocks();
  });

  // Runs after each test
  afterEach(() => {
    cleanup();
  });

  // Runs once after all tests
  afterAll(() => {
    mockServer.close();
  });

  it('fetches data', async () => {
    // test code
  });
});
```

---

## Debugging Tests

### Run Single Test
```bash
npm test -- math.test.js
```

### Run Tests Matching a Pattern
```bash
npm test -- --grep "add"
```

### Run in Watch Mode (Default)
```bash
npm test
```

### Run Once (CI Mode)
```bash
npm test -- --run
```

### Debug in VS Code

Add to `.vscode/launch.json`:
```json
{
  "type": "node",
  "request": "launch",
  "program": "${workspaceFolder}/node_modules/vitest/vitest.mjs",
  "args": ["--inspect-brk", "--no-coverage"],
  "console": "integratedTerminal"
}
```

---

## Test Coverage

Generate coverage report:
```bash
npm run test:coverage
```

This creates a `coverage/` folder with an HTML report showing:
- Line coverage
- Branch coverage
- Function coverage
- Statement coverage

Aim for:
- **70-80%** coverage for production code
- **90%+** coverage for critical business logic
- Don't aim for 100% - focus on meaningful tests

---

## Best Practices Checklist

- ✓ Write descriptive test names that explain what is being tested
- ✓ Test one thing per test function
- ✓ Use AAA pattern: Arrange, Act, Assert
- ✓ Keep tests independent - order shouldn't matter
- ✓ Mock external dependencies (APIs, databases, timers)
- ✓ Use beforeEach/afterEach for common setup
- ✓ Avoid testing implementation details
- ✓ Use meaningful assertions, not just `expect(x).toBe(true)`
- ✓ Keep tests fast by mocking slow operations
- ✓ Group related tests with describe blocks

---

## Common Mistakes to Avoid

❌ **Don't:** Test implementation details
```typescript
// Bad
expect(component.state.value).toBe(5);
```

✓ **Do:** Test behavior
```typescript
// Good
expect(screen.getByText('Count: 5')).toBeInTheDocument();
```

❌ **Don't:** Write tests that depend on each other
```typescript
// Bad - Order matters!
let user: ReturnType<typeof createUser>;
it('creates user', () => { user = createUser(); });
it('uses user', () => { expect(user.id).toBeDefined(); });
```

✓ **Do:** Make tests independent
```typescript
// Good
it('creates and uses user', () => {
  const user = createUser();
  expect(user.id).toBeDefined();
});
```

❌ **Don't:** Test multiple things
```typescript
// Bad
it('works', () => {
  expect(add(1, 1)).toBe(2);
  expect(subtract(2, 1)).toBe(1);
  expect(multiply(2, 2)).toBe(4);
});
```

✓ **Do:** Test one thing per test
```typescript
// Good
it('adds numbers', () => { expect(add(1, 1)).toBe(2); });
it('subtracts numbers', () => { expect(subtract(2, 1)).toBe(1); });
it('multiplies numbers', () => { expect(multiply(2, 2)).toBe(4); });
```

---

## Resources

- **Vitest Docs:** https://vitest.dev
- **Testing Library:** https://testing-library.com/react
- **Test Examples:** See the accompanying example files
  - `01-typescript-examples.ts` - Pure TS functions
  - `02-react-examples.tsx` - React components
  - `03-mock-data-examples.ts` - Mocking patterns

---

## Quick Command Reference

| Command | Purpose |
|---------|---------|
| `npm test` | Run tests in watch mode |
| `npm test -- --run` | Run tests once |
| `npm test -- --grep "keyword"` | Run specific tests |
| `npm test -- file.test.js` | Run specific file |
| `npm run test:ui` | Open UI dashboard |
| `npm run test:coverage` | Generate coverage report |

---

## Next Steps

1. Install Vitest and create your first test
2. Run the examples from the provided code files
3. Write tests for existing functions in your project
4. Practice mocking with external APIs
5. Add tests to your CI/CD pipeline

Good luck with your testing journey! 🚀
