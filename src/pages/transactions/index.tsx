import TransactionsTable from "@/components/transactions-table"

export default function TransactionsPage() {
  return (
    <>
      <section>
        <h1>Transactions</h1>
      </section>
      <section>
        <TransactionsTable />
      </section>
    </>
  )
}
