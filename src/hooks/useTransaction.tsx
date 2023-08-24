import { fetcher } from "@/lib/fetcher"
import { useAppDataStore } from "@/stores/appDataStore"
import { Transaction } from "@prisma/client"
import { useMutation, useQuery } from "react-query"

export function useTransaction() {
  const transactions = useAppDataStore((state) => state.transactions)
  const setTransactions = useAppDataStore((state) => state.setTransactions)
  const addTransaction = useAppDataStore((state) => state.addTransaction)

  const { isLoading, isError, error } = useQuery({
    queryKey: ["transactions"],
    queryFn: () => fetcher("GET", "/api/transactions", null),
    onSuccess: (data) => {
      setTransactions(data)
    },
  })

  const mutation = useMutation({
    mutationKey: ["transactions"],
    mutationFn: (transaction: Transaction) => fetcher("POST", "/api/transactions", transaction),
    onSuccess: (data) => {
      addTransaction(data)
    },
  })

  return { transactions, setTransactions, mutation, isLoading, isError, error }
}
