import { fetcher } from "@/lib/fetcher"
import { useAppDataStore } from "@/stores/appDataStore"
import { useQuery } from "react-query"

export function useBook() {
  const books = useAppDataStore((state) => state.books)
  const activeBook = useAppDataStore((state) => state.activeBook)
  const setBooks = useAppDataStore((state) => state.setBooks)

  const { isLoading, isError, error } = useQuery({
    queryKey: ["books"],
    queryFn: () => fetcher("GET", "/api/books", null),
    onSuccess: (data) => {
      setBooks(data)
    },
  })

  return { books, activeBook, isLoading, isError, error }
}
