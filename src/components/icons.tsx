type IconProps = React.HTMLAttributes<SVGElement>

import {
  AlertTriangle,
  ArrowRight,
  ArrowLeftRightIcon,
  ArrowUpDownIcon,
  BellRingIcon,
  Check,
  ChevronLeft,
  ChevronRight,
  Command,
  CreditCard,
  File,
  FileText,
  HelpCircle,
  Image,
  Laptop,
  Loader2,
  LogOutIcon,
  LucideProps,
  Moon,
  MoreVertical,
  Pizza,
  Plus,
  Settings,
  SunMedium,
  Trash,
  Twitter,
  User,
  X,
  HomeIcon,
  LayoutDashboardIcon,
  AlbumIcon,
  ListTodoIcon,
  CopyIcon,
  TagIcon,
  RefreshCwIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  CalendarIcon,
  ArrowLeft,
  MinusIcon,
  DeleteIcon,
  TrashIcon,
  SearchIcon,
  HashIcon,
  MenuIcon,
  UsersIcon,
  FilterIcon,
  CornerDownRightIcon,
  EditIcon,
} from "lucide-react"
import type { IconNode as LucideIcon } from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  date: CalendarIcon,
  home: HomeIcon,
  dashboard: LayoutDashboardIcon,
  transactions: ArrowLeftRightIcon,
  close: X,
  arrowDownRight: CornerDownRightIcon,
  filter: FilterIcon,
  minus: MinusIcon,
  edit: EditIcon,
  delete: TrashIcon,
  search: SearchIcon,
  // spinner: FaSpinner,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  tags: HashIcon,
  trash: Trash,
  post: FileText,
  page: File,
  media: Image,
  settings: Settings,
  billing: CreditCard,
  ellipsis: MoreVertical,
  add: Plus,
  warning: AlertTriangle,
  user: User,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  arrowDown: ArrowDownIcon,
  arrowUp: ArrowUpIcon,
  arrowLeftRight: ArrowLeftRightIcon,
  sortingArrow: ArrowUpDownIcon,
  help: HelpCircle,
  pizza: Pizza,
  sun: SunMedium,
  moon: Moon,
  menu: MenuIcon,
  laptop: Laptop,
  // google: Google,
  check: Check,
  logout: LogOutIcon,
  bell: BellRingIcon,
  people: UsersIcon,
  journals: AlbumIcon,
  tasks: ListTodoIcon,
  categories: CopyIcon,
  category: TagIcon,
  recurring: RefreshCwIcon,
  twitter: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148a13.98 13.98 0 0 0 10.15 5.144 4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z" />
    </svg>
  ),
  logo: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      zoomAndPan="magnify"
      viewBox="0 0 768 767.999994"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <defs>
        <g />
      </defs>
      <g fill="currentColor" fillOpacity="1">
        <g transform="translate(187.400912, 562.817668)">
          <g>
            <path d="M 390.597656 -201.597656 C 359.796875 -117.597656 321.300781 -83.300781 288.398438 -83.300781 C 275.800781 -83.300781 268.800781 -89.601562 268.800781 -101.5 C 268.800781 -106.398438 270.199219 -112 272.300781 -119 L 326.898438 -274.398438 C 331.796875 -288.398438 334.597656 -301 334.597656 -312.898438 C 334.597656 -368.898438 287 -410.898438 231 -410.898438 C 203.699219 -410.898438 182 -404.597656 163.800781 -391.296875 C 159.597656 -403.898438 142.097656 -410.898438 123.199219 -410.898438 C 103.601562 -410.898438 84.699219 -401.796875 77.699219 -382.199219 L -39.199219 -55.300781 C -41.300781 -49 -42 -43.398438 -42 -37.800781 C -42 -11.898438 -21.699219 1.398438 0.699219 1.398438 C 25.199219 1.398438 53.199219 -14 63.699219 -45.5 C 88.199219 -113.398438 121.800781 -209.300781 145.597656 -276.5 C 164.5 -311.5 189 -328.300781 208.597656 -328.300781 C 221.199219 -328.300781 230.300781 -319.898438 230.300781 -306.597656 C 230.300781 -301.699219 228.898438 -295.398438 226.800781 -289.097656 L 175.699219 -144.898438 C 170.097656 -128.800781 166.597656 -113.398438 166.597656 -98.699219 C 166.597656 -34.300781 219.800781 0 279.300781 0 C 350.699219 0 427 -48.300781 475.296875 -184.800781 C 477.398438 -190.398438 478.796875 -196 478.796875 -200.898438 C 478.796875 -223.300781 458.5 -235.199219 437.5 -235.199219 C 418.597656 -235.199219 397.597656 -224.699219 390.597656 -201.597656 Z M 390.597656 -201.597656 " />
          </g>
        </g>
      </g>
    </svg>
  ),
  spinner: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
}
