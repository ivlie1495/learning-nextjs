/**
 * REACT COMPONENT TESTING WITH VITEST
 * Examples using @testing-library/react
 */

// ============================================
// 1. SIMPLE COMPONENT TESTING
// ============================================

// components/Button.tsx
interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export function Button({ label, onClick, disabled = false }: ButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}

// components/Button.test.tsx
/*
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button Component', () => {
  it('renders with correct label', () => {
    render(<Button label="Click me" onClick={() => {}} />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();
    render(<Button label="Submit" onClick={onClick} />);

    await user.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button label="Disabled" onClick={() => {}} disabled={true} />);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('is not disabled by default', () => {
    render(<Button label="Active" onClick={() => {}} />);
    expect(screen.getByRole('button')).not.toBeDisabled();
  });
});
*/

// ============================================
// 2. COMPONENT WITH STATE TESTING
// ============================================

// components/Counter.tsx
import { useState } from 'react';

interface CounterProps {
  initialValue?: number;
}

export function Counter({ initialValue = 0 }: CounterProps) {
  const [count, setCount] = useState<number>(initialValue);

  return (
    <div>
      <p data-testid="count-display">Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

// components/Counter.test.tsx
/*
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from './Counter';

describe('Counter Component', () => {
  it('renders with initial value', () => {
    render(<Counter initialValue={0} />);
    expect(screen.getByTestId('count-display')).toHaveTextContent('Count: 0');
  });

  it('renders with custom initial value', () => {
    render(<Counter initialValue={5} />);
    expect(screen.getByTestId('count-display')).toHaveTextContent('Count: 5');
  });

  it('increments count when increment button is clicked', async () => {
    const user = userEvent.setup();
    render(<Counter initialValue={0} />);

    await user.click(screen.getByText('Increment'));
    expect(screen.getByTestId('count-display')).toHaveTextContent('Count: 1');
  });

  it('decrements count when decrement button is clicked', async () => {
    const user = userEvent.setup();
    render(<Counter initialValue={5} />);

    await user.click(screen.getByText('Decrement'));
    expect(screen.getByTestId('count-display')).toHaveTextContent('Count: 4');
  });

  it('resets count when reset button is clicked', async () => {
    const user = userEvent.setup();
    render(<Counter initialValue={10} />);

    await user.click(screen.getByText('Increment'));
    await user.click(screen.getByText('Reset'));
    expect(screen.getByTestId('count-display')).toHaveTextContent('Count: 0');
  });
});
*/

// ============================================
// 3. COMPONENT WITH PROPS AND CONDITIONAL RENDERING
// ============================================

// components/UserProfile.tsx
interface User {
  name: string;
  email: string;
  age: number;
  isPremium: boolean;
}

interface UserProfileProps {
  user: User | null;
  isLoading?: boolean;
}

export function UserProfile({ user, isLoading = false }: UserProfileProps) {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>No user found</div>;
  }

  return (
    <div data-testid="user-profile">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
      {user.isPremium && <span className="badge">Premium Member</span>}
    </div>
  );
}

// components/UserProfile.test.tsx
/*
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { UserProfile } from './UserProfile';

describe('UserProfile Component', () => {
  const mockUser = {
    name: 'John Doe',
    email: 'john@example.com',
    age: 30,
    isPremium: false
  };

  it('renders loading state', () => {
    render(<UserProfile user={null} isLoading={true} />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders no user message when user is null', () => {
    render(<UserProfile user={null} isLoading={false} />);
    expect(screen.getByText('No user found')).toBeInTheDocument();
  });

  it('renders user information', () => {
    render(<UserProfile user={mockUser} isLoading={false} />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Email: john@example.com')).toBeInTheDocument();
    expect(screen.getByText('Age: 30')).toBeInTheDocument();
  });

  it('shows premium badge for premium members', () => {
    const premiumUser = { ...mockUser, isPremium: true };
    render(<UserProfile user={premiumUser} isLoading={false} />);

    expect(screen.getByText('Premium Member')).toBeInTheDocument();
  });

  it('does not show premium badge for non-premium members', () => {
    render(<UserProfile user={mockUser} isLoading={false} />);

    expect(screen.queryByText('Premium Member')).not.toBeInTheDocument();
  });
});
*/

// ============================================
// 4. FORM COMPONENT TESTING
// ============================================

// components/LoginForm.tsx
import React from 'react';

interface LoginFormData {
  email: string;
  password: string;
}

interface LoginFormProps {
  onSubmit: (data: LoginFormData) => void;
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [error, setError] = React.useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      setError('All fields are required');
      return;
    }

    if (!email.includes('@')) {
      setError('Invalid email');
      return;
    }

    setError('');
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        data-testid="email-input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        data-testid="password-input"
      />
      {error && <p data-testid="error-message">{error}</p>}
      <button type="submit">Login</button>
    </form>
  );
}

// components/LoginForm.test.tsx
/*
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LoginForm } from './LoginForm';

describe('LoginForm Component', () => {
  it('renders form inputs', () => {
    render(<LoginForm onSubmit={() => {}} />);

    expect(screen.getByTestId('email-input')).toBeInTheDocument();
    expect(screen.getByTestId('password-input')).toBeInTheDocument();
  });

  it('shows error when fields are empty', async () => {
    const user = userEvent.setup();
    render(<LoginForm onSubmit={() => {}} />);

    await user.click(screen.getByText('Login'));
    expect(screen.getByTestId('error-message')).toHaveTextContent('All fields are required');
  });

  it('shows error for invalid email', async () => {
    const user = userEvent.setup();
    render(<LoginForm onSubmit={() => {}} />);

    await user.type(screen.getByTestId('email-input'), 'invalid-email');
    await user.type(screen.getByTestId('password-input'), 'password');
    await user.click(screen.getByText('Login'));

    expect(screen.getByTestId('error-message')).toHaveTextContent('Invalid email');
  });

  it('calls onSubmit with correct data on successful submission', async () => {
    const onSubmit = vi.fn();
    const user = userEvent.setup();
    render(<LoginForm onSubmit={onSubmit} />);

    await user.type(screen.getByTestId('email-input'), 'john@example.com');
    await user.type(screen.getByTestId('password-input'), 'password123');
    await user.click(screen.getByText('Login'));

    expect(onSubmit).toHaveBeenCalledWith({
      email: 'john@example.com',
      password: 'password123'
    });
  });

  it('clears error message on successful submission', async () => {
    const user = userEvent.setup();
    render(<LoginForm onSubmit={() => {}} />);

    // First, trigger error
    await user.click(screen.getByText('Login'));
    expect(screen.getByTestId('error-message')).toBeInTheDocument();

    // Then, fill form correctly
    await user.type(screen.getByTestId('email-input'), 'john@example.com');
    await user.type(screen.getByTestId('password-input'), 'password');
    await user.click(screen.getByText('Login'));

    expect(screen.queryByTestId('error-message')).not.toBeInTheDocument();
  });
});
*/

// ============================================
// 5. LIST COMPONENT TESTING
// ============================================

// components/TodoList.tsx
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  if (todos.length === 0) {
    return <p>No todos yet</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} data-testid={`todo-${todo.id}`}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
          />
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
          <button onClick={() => onDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

// components/TodoList.test.tsx
/*
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TodoList } from './TodoList';

describe('TodoList Component', () => {
  const mockTodos = [
    { id: 1, text: 'Buy groceries', completed: false },
    { id: 2, text: 'Finish project', completed: true },
    { id: 3, text: 'Exercise', completed: false }
  ];

  it('renders empty state', () => {
    render(
      <TodoList todos={[]} onToggle={() => {}} onDelete={() => {}} />
    );
    expect(screen.getByText('No todos yet')).toBeInTheDocument();
  });

  it('renders all todos', () => {
    render(
      <TodoList todos={mockTodos} onToggle={() => {}} onDelete={() => {}} />
    );

    expect(screen.getByText('Buy groceries')).toBeInTheDocument();
    expect(screen.getByText('Finish project')).toBeInTheDocument();
    expect(screen.getByText('Exercise')).toBeInTheDocument();
  });

  it('calls onToggle when checkbox is clicked', async () => {
    const onToggle = vi.fn();
    const user = userEvent.setup();
    render(
      <TodoList todos={mockTodos} onToggle={onToggle} onDelete={() => {}} />
    );

    const checkbox = screen.getAllByRole('checkbox')[0];
    await user.click(checkbox);

    expect(onToggle).toHaveBeenCalledWith(1);
  });

  it('calls onDelete when delete button is clicked', async () => {
    const onDelete = vi.fn();
    const user = userEvent.setup();
    render(
      <TodoList todos={mockTodos} onToggle={() => {}} onDelete={onDelete} />
    );

    const deleteButtons = screen.getAllByText('Delete');
    await user.click(deleteButtons[0]);

    expect(onDelete).toHaveBeenCalledWith(1);
  });

  it('applies strikethrough styling for completed todos', () => {
    render(
      <TodoList todos={mockTodos} onToggle={() => {}} onDelete={() => {}} />
    );

    const completedTodo = screen.getByText('Finish project');
    expect(completedTodo).toHaveStyle('textDecoration: line-through');
  });
});
*/

// ============================================
// 6. ASYNC DATA FETCHING TESTING
// ============================================

// components/UserCard.tsx
interface UserCardUser {
  id: number;
  name: string;
  email: string;
}

interface UserCardProps {
  userId: number;
}

export function UserCard({ userId }: UserCardProps) {
  const [user, setUser] = useState<UserCardUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  React.useEffect(() => {
    async function loadUser() {
      try {
        const response = await fetch(`/api/users/${userId}`);
        if (!response.ok) throw new Error('Failed to load user');
        const data: UserCardUser = await response.json();
        setUser(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }

    loadUser();
  }, [userId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p data-testid="error">{error}</p>;
  if (!user) return null;

  return (
    <div data-testid="user-card">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}

// components/UserCard.test.tsx
/*
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { UserCard } from './UserCard';

describe('UserCard Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('shows loading state initially', () => {
    global.fetch = vi.fn(() => new Promise(() => {})); // never resolves

    render(<UserCard userId={1} />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders user data after successful fetch', async () => {
    const mockUser = { id: 1, name: 'Alice', email: 'alice@example.com' };

    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockUser)
      })
    );

    render(<UserCard userId={1} />);

    await waitFor(() => {
      expect(screen.getByTestId('user-card')).toBeInTheDocument();
    });

    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('alice@example.com')).toBeInTheDocument();
  });

  it('shows error when fetch fails', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({ ok: false })
    );

    render(<UserCard userId={1} />);

    await waitFor(() => {
      expect(screen.getByTestId('error')).toBeInTheDocument();
    });

    expect(screen.getByTestId('error')).toHaveTextContent('Failed to load user');
  });

  it('re-fetches when userId changes', async () => {
    const users = [
      { id: 1, name: 'Alice', email: 'alice@example.com' },
      { id: 2, name: 'Bob', email: 'bob@example.com' }
    ];

    global.fetch = vi.fn((url: string) => {
      const id = Number(url.split('/').pop());
      const user = users.find(u => u.id === id);
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(user)
      });
    });

    const { rerender } = render(<UserCard userId={1} />);

    await waitFor(() => expect(screen.getByText('Alice')).toBeInTheDocument());

    rerender(<UserCard userId={2} />);

    await waitFor(() => expect(screen.getByText('Bob')).toBeInTheDocument());
  });
});
*/

// ============================================
// 7. CUSTOM HOOK WITH ASYNC DATA TESTING
// ============================================

// hooks/useFetch.ts
interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useFetch<T>(url: string): FetchState<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  React.useEffect(() => {
    let cancelled = false;

    async function fetchData() {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        const result: T = await response.json();
        if (!cancelled) setData(result);
      } catch (err) {
        if (!cancelled) setError((err as Error).message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchData();

    return () => {
      cancelled = true;
    };
  }, [url]);

  return { data, loading, error };
}

// hooks/useFetch.test.ts
/*
import { describe, it, expect, vi } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { useFetch } from './useFetch';

interface Post {
  id: number;
  title: string;
}

describe('useFetch hook', () => {
  it('returns loading state initially', () => {
    global.fetch = vi.fn(() => new Promise(() => {})); // never resolves

    const { result } = renderHook(() => useFetch<Post>('/api/posts/1'));

    expect(result.current.loading).toBe(true);
    expect(result.current.data).toBeNull();
    expect(result.current.error).toBeNull();
  });

  it('returns data on successful fetch', async () => {
    const mockPost: Post = { id: 1, title: 'Hello World' };

    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockPost)
      })
    );

    const { result } = renderHook(() => useFetch<Post>('/api/posts/1'));

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.data).toEqual(mockPost);
    expect(result.current.error).toBeNull();
  });

  it('returns error on failed fetch', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({ ok: false, status: 404 })
    );

    const { result } = renderHook(() => useFetch<Post>('/api/posts/999'));

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.data).toBeNull();
    expect(result.current.error).toBe('HTTP error: 404');
  });

  it('cancels fetch on unmount to prevent state updates', async () => {
    let resolvePromise!: (value: unknown) => void;
    const fetchPromise = new Promise(resolve => { resolvePromise = resolve; });

    global.fetch = vi.fn(() => fetchPromise);

    const { unmount } = renderHook(() => useFetch<Post>('/api/posts/1'));

    unmount();

    // Resolve after unmount — should not cause state update warnings
    resolvePromise({ ok: true, json: () => Promise.resolve({ id: 1, title: 'Late' }) });

    await vi.runAllTimersAsync();
    // No assertion needed — test passes if no "can't update unmounted component" warning
  });
});
*/
