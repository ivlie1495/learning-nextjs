// Pure Component (slide 4)
// Same input always produces the same output, no side effects
export default function Greeting({ name }: { name: string }) {
  return <h1 className="text-lg">Hello, {name}!</h1>
}
