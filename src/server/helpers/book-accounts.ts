import { prisma } from "../db"

export const getAllBookAccounts = async () => {
  return await prisma.bookAccount.findMany()
}
