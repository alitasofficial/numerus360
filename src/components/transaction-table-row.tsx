import { Category, Transaction } from "@prisma/client"
import { useState } from "react"
import Link from "next/link"
import { Icons } from "./icons"

type TransactionTableRowProps = {
  transaction: Transaction
  setUpdateFormData: (data: Transaction) => void
  setOpenUpdateForm: (open: boolean) => void
}

export default function TransactionTableRow({
  transaction,
  setUpdateFormData,
  setOpenUpdateForm,
}: TransactionTableRowProps) {
  const amountCurrencyFormatted = Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
  }).format(transaction.amount)
  const createdAtFormatted = Intl.DateTimeFormat("tr-TR", {
    dateStyle: "medium",
  }).format(new Date(transaction.createdAt))

  return (
    <div key={transaction.id}>
      <Link
        href={`/transactions/${transaction.id}`}
        className={`min-h-14 relative grid cursor-pointer grid-cols-5 items-center justify-between rounded-md border px-3  py-2  transition-all duration-300 hover:bg-zinc-100 dark:bg-card dark:backdrop-blur-sm hover:dark:bg-zinc-800/95`}
      >
        <div className="col-span-3 flex items-center gap-2">
          {transaction.type === "INCOME" ? (
            <Icons.arrowDown className="h-4 w-4 text-green-500" />
          ) : (
            <Icons.arrowUp className="h-4 w-4 text-red-500" />
          )}

          <div className="col-span-3 flex flex-col space-y-2">
            <div className="text-base font-light">{transaction.name}</div>
          </div>
        </div>

        <div className="col-span-1 flex flex-col">
          <div className="text-xs text-gray-500"></div>
        </div>

        <div className="flex flex-col items-end space-y-2">
          <div className="text-sm font-semibold">{amountCurrencyFormatted}</div>
          <div className="text-xs text-gray-500">{createdAtFormatted}</div>
        </div>
      </Link>
    </div>
  )
}
