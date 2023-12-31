import { useTransaction } from "@/hooks/useTransaction"
import TransactionTableRow from "./transaction-table-row"
import { useState } from "react"
import { Transaction } from "@prisma/client"
import { Icons } from "./icons"
import { Button } from "./ui/button"
import BookAccountSelector from "./book-account-selector"

export default function TransactionsTable() {
  const { transactions } = useTransaction()
  const [openUpdateForm, setOpenUpdateForm] = useState(false)
  const [updateFormData, setUpdateFormData] = useState<Transaction | null>(null)
  const [showAllTransactions, setShowAllTransactions] = useState(false)

  return (
    <section>
      <>
        <div className="mb-3 flex items-center justify-between gap-3 py-2 px-2 bg-muted rounded-md">
          <div className="flex w-full items-center rounded-md pl-2 gap-2">
            <Icons.filter className="mx-1 h-4 w-4" />
            <BookAccountSelector setShowAllTransactions={setShowAllTransactions} />
            {/* <CategorySelector
                categories={categories}
                categoryFilter={categoryFilter}
                setCategoryFilter={setCategoryFilter}
              /> */}
          </div>

          <Button
            variant={showAllTransactions ? "default" : "ghost"}
            className={`font-semibold dark:text-foreground hover:bg-background hover:text-foreground ${
              showAllTransactions ? "bg-background text-foreground" : ""
            }`}
            onClick={() => {
              setShowAllTransactions((prev) => !prev)
            }}
          >
            <span>All</span>
          </Button>
        </div>
      </>

      <>
        <div className="space-y-1 rounded-md border divide-y ">
          {transactions.length === 0 ? (
            <div className="min-h-14 px-3 py-2 text-center">No transactions</div>
          ) : (
            transactions.map((t) => (
              <TransactionTableRow
                key={t.id}
                transaction={t}
                setOpenUpdateForm={setOpenUpdateForm}
                setUpdateFormData={setUpdateFormData}
              />
            ))
          )}
        </div>
      </>
    </section>
  )
}
