import { fetcher } from "@/lib/fetcher"
import { useAppDataStore } from "@/stores/appDataStore"
import { useQuery } from "react-query"

export function useTransaction() {
  const transactions = useAppDataStore((state) => state.transactions)
  const setTransactions = useAppDataStore((state) => state.setTransactions)

  const { isLoading, isError, error } = useQuery({
    queryKey: ["transactions"],
    queryFn: () => fetcher("GET", "/api/transactions", null),
    onSuccess: (data) => {
      setTransactions(data)
    },
  })

  return { transactions, setTransactions, isLoading, isError, error }
}
