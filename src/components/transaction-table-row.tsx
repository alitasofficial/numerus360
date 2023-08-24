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
        className={`
          h-16 px-3 py-2 
          relative 
          border-none rounded-md
          flex items-center justify-between
          cursor-pointer
          transition-all duration-300 
          hover:bg-zinc-100 dark:bg-card dark:backdrop-blur-sm hover:dark:bg-zinc-800/95
            `}
      >
        <div className="flex gap-4 items-center">
          {transaction.type === "INCOME" ? (
            <Icons.arrowDown className="h-6 w-6 p-1 text-green-500 bg-green-50 rounded-full" />
          ) : (
            <Icons.arrowUp className="h-6 w-6 p-1 text-red-500 bg-red-50 rounded-full" />
          )}

          <div className="flex flex-col gap-1 items-start">
            <span className="text-base font-semibold">Other</span>
            <span className="text-sm text-muted-foreground">{transaction.name}</span>
          </div>
        </div>

        <div className="flex flex-col gap-1 items-end">
          <span className="text-base font-semibold">{amountCurrencyFormatted}</span>
          <span className="text-sm text-gray-500">{createdAtFormatted}</span>
        </div>
      </Link>
    </div>
  )
}
