import { prisma } from "../db"

export const getAllTransactions = async () => {
  return await prisma.transaction.findMany()
}
