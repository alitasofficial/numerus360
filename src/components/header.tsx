import Link from "next/link"
import { Icons } from "./icons"

export default function Header() {
  return (
    <header className="h-16">
      <div className="container flex items-center justify-between h-full md:hidden">
        <div className="flex items-center gap-3">
          <Link href="/" className="block">
            <Icons.logo className="w-10 h-10 text-foreground" />
          </Link>
          {/* <MobileNotifications /> */}
          {/* <BookSelector /> */}
        </div>
        <div className="flex gap-3 item-center">
          {/* <MobileMenu /> */}
          <div className="w-10 h-10 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </header>
  )
}
