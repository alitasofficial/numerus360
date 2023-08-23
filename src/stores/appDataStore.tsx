import { create } from "zustand"
import { Book, BookAccount, Category, Transaction } from "@prisma/client"

type AppDataStore = {
  books: Book[]
  activeBook: Book | null
  bookAccounts: BookAccount[]
  activeBookAccount: BookAccount | null
  categories: Category[]
  transactions: Transaction[]
  //   State actions
  //   Books
  setBooks: (books: Book[]) => void
  setActiveBook: (book: Book) => void
  //   Book Accounts
  setBookAccounts: (bookAccounts: BookAccount[]) => void
  setActiveBookAccount: (bookAccount: BookAccount) => void
  //   Categories
  setCategories: (categories: Category[]) => void
  // Transactions
  setTransactions: (transactions: Transaction[]) => void
}

export const useAppDataStore = create<AppDataStore>((set) => ({
  books: [],
  activeBook: null,
  bookAccounts: [],
  activeBookAccount: null,
  categories: [],
  transactions: [],
  //   State actions
  //   Books
  setBooks: (books) => set({ books }),
  setActiveBook: (book) => set({ activeBook: book }),
  //   Book Accounts
  setBookAccounts: (bookAccounts) => set({ bookAccounts: bookAccounts }),
  setActiveBookAccount: (bookAccount) => set({ activeBookAccount: bookAccount }),
  //   Categories
  setCategories: (categories) => set({ categories: categories }),
  // Transactions
  setTransactions: (transactions) => set({ transactions: transactions }),
}))
