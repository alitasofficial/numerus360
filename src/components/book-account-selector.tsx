import { useBookAccount } from "@/hooks/useBookAccount"
import { Button } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"

type BookAccountSelectorProps = {
  setShowAllTransactions: (showAllTransactions: boolean) => void
}

export default function BookAccountSelector({ setShowAllTransactions }: BookAccountSelectorProps) {
  const { bookAccounts, activeBookAccount, setActiveBookAccount } = useBookAccount()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="flex items-center">
        <Button variant={"link"} className="font-light dark:text-foreground">
          {activeBookAccount?.name}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuLabel>Select Book Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {bookAccounts.map((bookAccount) => (
          <DropdownMenuItem
            key={bookAccount.id}
            onClick={() => {
              setActiveBookAccount(bookAccount)
              setShowAllTransactions(false)
            }}
          >
            {bookAccount.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
