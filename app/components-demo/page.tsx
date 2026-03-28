import ListGroup from '@/components/ListGroup'
import AlertDemo from '@/components/AlertDemo'

// React Components demo page
// Covers: ListGroup, Fragment, Rendering Lists, Conditional Rendering,
// State, Events, Props, Children, Reusable Button, Show/Close Alert
export default function ComponentsDemoPage() {
  const fruits = ['Apple', 'Banana', 'Orange']

  return (
    <div className="px-6 py-8 max-w-3xl mx-auto space-y-10">
      <h1 className="text-3xl font-bold">React Components</h1>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-700">
          List Group + Rendering Lists + Conditional Rendering + State
        </h2>
        <p className="text-sm text-gray-500">
          Click an item to select it. Uses Fragment, map with key, ternary for
          conditional rendering, and useState for selection.
        </p>
        <ListGroup title="Fruits" items={fruits} />
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-700">
          Empty List (Conditional Rendering)
        </h2>
        <ListGroup title="Empty List" items={[]} />
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-700">
          Reusable Button + Show/Close Alert
        </h2>
        <p className="text-sm text-gray-500">
          Button accepts children and onClick via props. Alert can be shown and
          closed using state.
        </p>
        <AlertDemo />
      </section>
    </div>
  )
}
