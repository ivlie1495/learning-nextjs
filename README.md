# Learning Next.js

A hands-on project for learning Next.js fundamentals, built lesson by lesson. Each branch covers a specific topic with working demo pages.

## Getting Started

```bash
npm install
npx prisma migrate dev
npx prisma generate
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the homepage with links to all demos.

## Lessons

### Lesson 1-2: Components & Styling
Building reusable components with props, children, lists, and conditional rendering. Covers different styling approaches: vanilla CSS, CSS Modules, inline styles, and CSS-in-JS.

### Lesson 3: Managing State & Building Forms
Using `useState` for local state, filtering lists, and updating objects/arrays. Building forms with React Hook Form and Zod schema validation.

### Lesson 4: Connecting to the Backend
Data fetching with `useEffect`, Axios with a service layer, custom `useFetch` hook, and React Query for caching and loading states.

### Lesson 5: Global State Management
Sharing state across components using React Context, `useReducer` for complex state logic, and Zustand as a lightweight store.

### Lesson 6: Routing & Navigation
File-based routing with the App Router, dynamic routes (`[id]`), nested layouts, catch-all segments (`[[...slug]]`), loading/error states, and not-found pages.

### Lesson 7: API Routes
Server-side API endpoints inside `/app/api/`. Full CRUD with Prisma (SQLite), Zod request validation, and dynamic route params.

### Lesson 8: Authentication
JWT-based auth with login/logout API routes, httpOnly cookies, middleware for route protection, and a `/api/auth/me` endpoint to get the current user.

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Prisma (SQLite)
- Zod
- React Query
- Zustand
