import { useState } from "react"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { DatePicker } from "../date-picker"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import { Icons } from "../icons"
import { Button } from "../ui/button"
import { useMutation } from "react-query"
import { useTransaction } from "@/hooks/useTransaction"
import { Transaction } from "@prisma/client"
import { useBook } from "@/hooks/useBook"

export default function NewTransactionForm({ setModalOpen }: { setModalOpen: (value: boolean) => void }) {
  const { mutation } = useTransaction()
  const { activeBook } = useBook()
  const [amount, setAmount] = useState("")
  const [date, setDate] = useState(new Date())
  const [type, setType] = useState("expense")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [recurring, setRecurring] = useState(false)

  const handleFormSubmit = () => {
    // console.log("Form submitted")
    // console.log("Amount: ", amount)
    // console.log("Date: ", date)
    // console.log("Type: ", type)
    // console.log("Description: ", description)
    // console.log("Category: ", category)
    // console.log("Recurring: ", recurring)

    const formData: Transaction = {
      bookId: activeBook?.id!,
      amount: Number(amount),
      date: date,
      type: type,
      description: description,
      category: category,
      recurring: recurring,
    }
    mutation.mutate(formData)
    setModalOpen(false)
  }

  return (
    <form className="space-y-3">
      <div className="py-3">
        <Label>
          <span className="sr-only">Price</span>
          <div className="flex items-center justify-center gap-2">
            <Input
              type="number"
              value={amount}
              onChange={(e) => {
                setAmount(parseInt(e.target.value))
              }}
              className="text-7xl h-auto text-center border-none font-bold placeholder:text-muted-foreground/30"
              placeholder="0,00"
            />
          </div>
        </Label>
      </div>
      <div>
        <DatePicker date={date} setDate={setDate} />
      </div>
      <RadioGroup
        value={type}
        onValueChange={(value) => {
          setType(value)
        }}
        defaultValue="expense"
        className="bg-muted text-muted-foreground grid grid-cols-3 gap-2 p-1 rounded-md"
      >
        <div className="flex ">
          <RadioGroupItem value="expense" id="expense" className="hidden" />
          <Label
            htmlFor="expense"
            className={`text-center h-full w-full py-3 cursor-pointer rounded-md ${
              type === "expense" ? "bg-white" : " bg-muted"
            }`}
          >
            Expense
          </Label>
        </div>
        <div className="flex ">
          <RadioGroupItem value="income" id="income" className="hidden" />
          <Label
            htmlFor="income"
            className={`text-center h-full w-full py-3 cursor-pointer rounded-md ${
              type === "income" ? "bg-white" : " bg-muted"
            }`}
          >
            Income
          </Label>
        </div>
        <div className="flex">
          <RadioGroupItem value="transfer" id="transfer" className="hidden" />
          <Label
            htmlFor="transfer"
            className={`text-center h-full w-full py-3 cursor-pointer rounded-md ${
              type === "transfer" ? "bg-white" : " bg-muted"
            }`}
          >
            Transafer
          </Label>
        </div>
      </RadioGroup>
      <Label className="rounded-md bg-muted flex justify-between font-normal items-center">
        <Input
          type="text"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value)
          }}
          className="bg-muted border-none"
          placeholder="Description"
        />
        <Icons.text className="w-5 h-5 text-muted-foreground mr-3" strokeWidth={1.5} />
        <span className="sr-only">Description</span>
      </Label>
      <Select
        value={category}
        defaultValue="other"
        onValueChange={(value) => {
          setCategory(value)
        }}
      >
        <SelectTrigger className="w-full bg-muted text-muted-foreground border-none">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="other">Other</SelectItem>
          <SelectItem value="market">Market</SelectItem>
          <SelectItem value="transport">Transport</SelectItem>
        </SelectContent>
      </Select>
      <div>
        <div className="flex justify-between px-2">
          <div className="inline-flex items-center font-semibold text-foreground">
            <Icons.recurring className="w-4 h-4 text-foreground mr-2" />
            <span>Set recurring</span>
          </div>
          <Label className="relative inline-flex items-center cursor-pointer">
            <Input
              type="checkbox"
              value=""
              className="sr-only peer"
              checked={recurring}
              onChange={() => {
                setRecurring(!recurring)
              }}
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer    dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
            {/* <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Checked toggle</span> */}
          </Label>
        </div>
        <p className="text-xs max-w-[30ch] pl-8 text-muted-foreground">
          Set a recurring transaction for the selected day of the month
        </p>
      </div>

      <div className="pt-6">
        <Button
          size={"lg"}
          onClick={(e) => {
            e.preventDefault()
            handleFormSubmit()
          }}
          className="w-full rounded-full"
        >
          Add Transaction
        </Button>
      </div>
    </form>
  )
}
