import { prisma } from "@/server/db"
import { createTransaction, getAllTransactions } from "@/server/helpers/transactions"
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const transactions = await getAllTransactions()

    res.status(200).json(transactions)
  } else if (req.method === "POST") {
    const transaction = await prisma.transaction.create({
      data: {
        amount: req.body.amount,
        userId: "user_2U8aL4RwM4Ph6aQnldiFx8To8pI",
        bookId: "cllfz86350000gas1jkt4bhar",
        categoryId: "cllg06lyk0002gas1i4spw71v",
        bookAccountId: "cllg069mf0001gas15qqbo46a",
      },
    })

    res.status(201).json(transaction)
  } else if (req.method === "PUT") {
    // Update a transaction
  } else if (req.method === "DELETE") {
    // Delete a transaction
  }
}
