import { Input } from "../ui/input"
import { Label } from "../ui/label"

export default function PriceInput() {
  return (
    <Label>
      <span className="sr-only">Price</span>
      <div className="flex items-center gap-2">
        <Input type="text" className="text-7xl h-auto text-center border-none" />
        <span className="text-2xl font-bold text-muted-foreground">$</span>
      </div>
    </Label>
  )
}
