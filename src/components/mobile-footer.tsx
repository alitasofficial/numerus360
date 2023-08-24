import Link from "next/link"
import { Icons } from "./icons"
import { useRouter } from "next/router"
import NewTransactionModal from "./modals/new-transaction-modal"

export default function MobileFooter() {
  const router = useRouter()
  return (
    <div className="h-16">
      <div className="h-full border-t bg-background md:hidden">
        <div className="flex items-center justify-around h-full">
          <Link
            href={"/home"}
            className={` p-2 ${router.asPath === "/home" ? "rounded-full bg-muted text-foreground" : ""}`}
          >
            <Icons.home className="w-6 h-6" strokeWidth={"1"} />
          </Link>
          <Link
            href={"/transactions"}
            className={` p-2 ${router.asPath === "/transactions" ? "rounded-full bg-muted text-foreground" : ""}`}
          >
            <Icons.arrowLeftRight className="w-6 h-6" strokeWidth={"1"} />
          </Link>

          <NewTransactionModal />
          <Link href={"/home"}>
            <Icons.search className="w-6 h-6" strokeWidth={"1"} />
          </Link>
          {/* <SearchDialog /> */}
        </div>
      </div>
    </div>
  )
}
