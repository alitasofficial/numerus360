import { prisma } from "../db"

export const getAllBooks = async () => {
  return await prisma.book.findMany()
}
