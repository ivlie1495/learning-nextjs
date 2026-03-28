import EffectDemo from '@/components/backend/EffectDemo'
import UserListAxios from '@/components/backend/UserListAxios'
import UserListCustomHook from '@/components/backend/UserListCustomHook'
import UserListReactQuery from '@/components/backend/UserListReactQuery'
import QueryProvider from '@/components/backend/QueryProvider'

// Connecting to the Backend demo page
export default function BackendDemoPage() {
  return (
    <div className="px-6 py-8 max-w-3xl mx-auto space-y-10">
      <h1 className="text-3xl font-bold">Connecting to the Backend</h1>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-700">
          useEffect + Dependencies + Cleanup
        </h2>
        <p className="text-sm text-gray-500">
          Timer uses setInterval with cleanup. Counter updates document title
          via dependency array.
        </p>
        <EffectDemo />
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-700">
          Axios + User Service + Async/Await
        </h2>
        <p className="text-sm text-gray-500">
          Fetches from JSONPlaceholder using a reusable API client and user
          service. Shows loading and error states.
        </p>
        <UserListAxios />
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-700">
          Custom useFetch Hook
        </h2>
        <p className="text-sm text-gray-500">
          Same data fetched with a reusable custom hook (useFetch).
        </p>
        <UserListCustomHook />
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-700">
          React Query (TanStack Query)
        </h2>
        <p className="text-sm text-gray-500">
          Fetching with useQuery — automatic caching, loading, and error states.
        </p>
        <QueryProvider>
          <UserListReactQuery />
        </QueryProvider>
      </section>
    </div>
  )
}
