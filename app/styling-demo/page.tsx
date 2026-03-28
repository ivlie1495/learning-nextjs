import CardVanilla from '@/components/CardVanilla'
import CardModule from '@/components/CardModule'
import CardInline from '@/components/CardInline'
import CardCSSinJS from '@/components/CardCSSinJS'

// Styling demo page - same Card component styled 4 ways
export default function StylingDemoPage() {
  return (
    <div className="px-6 py-8 max-w-4xl mx-auto space-y-10">
      <h1 className="text-3xl font-bold">Styling React & Next.js</h1>
      <p className="text-gray-600">
        The same Card component styled using four different methods.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <CardVanilla />
        <CardModule />
        <CardInline />
        <CardCSSinJS />
      </div>
    </div>
  )
}
