import { useBook } from "@/hooks/useBook"

export default function Home() {
  const { books, isLoading } = useBook()

  if (isLoading) return <main>Loading...</main>

  return (
    <main>
      <pre>{JSON.stringify(books, null, 3)}</pre>
    </main>
  )
}
