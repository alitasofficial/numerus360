import { fetcher } from "@/lib/fetcher"
import { useAppDataStore } from "@/stores/appDataStore"
import { useEffect } from "react"
import { useQuery } from "react-query"

export function useBookAccount() {
  const bookAccounts = useAppDataStore((state) => state.bookAccounts)
  const setBookAccounts = useAppDataStore((state) => state.setBookAccounts)
  const activeBookAccount = useAppDataStore((state) => state.activeBookAccount)
  const setActiveBookAccount = useAppDataStore((state) => state.setActiveBookAccount)

  const { isLoading, isError, error } = useQuery({
    queryKey: ["book-accounts"],
    queryFn: () => fetcher("GET", "/api/book-accounts", null),
    onSuccess: (data) => {
      setBookAccounts(data)
    },
  })

  useEffect(() => {
    if (bookAccounts.length > 0 && !activeBookAccount) {
      setActiveBookAccount(bookAccounts[0])
    }
  }, [bookAccounts])

  return { bookAccounts, setBookAccounts, activeBookAccount, setActiveBookAccount, isLoading, isError, error }
}
