import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "../ui/button"
import { Icons } from "../icons"
import NewTransactionForm from "../forms/new-transaction-form"
import { useState } from "react"

export default function NewTransactionModal() {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <Sheet open={modalOpen} onOpenChange={setModalOpen}>
      <SheetTrigger asChild>
        <Button className="p-2 rounded-md bg-primary text-primary-foreground ">
          <Icons.add className="w-6 h-6 text-white" />
        </Button>
      </SheetTrigger>
      <SheetContent side={"bottom"} className="top-0">
        <SheetHeader>
          <SheetTitle>New Transaction</SheetTitle>
        </SheetHeader>
        <section>
          <NewTransactionForm setModalOpen={setModalOpen} />
        </section>
      </SheetContent>
    </Sheet>
  )
}
