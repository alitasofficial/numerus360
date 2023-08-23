import { getAllBookAccounts } from "@/server/helpers/book-accounts"
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const bookAccounts = await getAllBookAccounts()

    res.status(200).json(bookAccounts)
  } else if (req.method === "POST") {
    // Create a new book account
  } else if (req.method === "PUT") {
    // Update a book account
  } else if (req.method === "DELETE") {
    // Delete a book account
  }
}
