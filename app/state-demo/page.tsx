import Greeting from '@/components/state/Greeting'
import UserProfile from '@/components/state/UserProfile'
import FruitList from '@/components/state/FruitList'

// Managing Component State demo page
export default function StateDemoPage() {
  return (
    <div className="px-6 py-8 max-w-3xl mx-auto space-y-10">
      <h1 className="text-3xl font-bold">Managing Component State</h1>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-700">
          Pure Component
        </h2>
        <p className="text-sm text-gray-500">
          Same props always produce the same output, no side effects.
        </p>
        <Greeting name="Ivan" />
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-700">
          Updating Object + Nested Object
        </h2>
        <p className="text-sm text-gray-500">
          State updated immutably using spread operator. Nested objects require
          copying every level.
        </p>
        <UserProfile />
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-700">
          Updating Array (Add / Remove)
        </h2>
        <p className="text-sm text-gray-500">
          No push or splice — use spread to add, filter to remove.
        </p>
        <FruitList />
      </section>
    </div>
  )
}
