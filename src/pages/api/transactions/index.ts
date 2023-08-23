import { getAllTransactions } from "@/server/helpers/transactions"
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const transactions = await getAllTransactions()

    res.status(200).json(transactions)
  } else if (req.method === "POST") {
    // Create a new transaction
  } else if (req.method === "PUT") {
    // Update a transaction
  } else if (req.method === "DELETE") {
    // Delete a transaction
  }
}
