import { prisma } from "../db"

export const getAllTransactions = async () => {
  return await prisma.transaction.findMany()
}

export const createTransaction = async (data: any) => {
  return await prisma.transaction.create({
    data: {
      ...data,
      book,
    },
  })
}
