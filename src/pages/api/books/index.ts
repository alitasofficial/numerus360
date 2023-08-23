import { getAllBooks } from "@/server/helpers/books"
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const books = await getAllBooks()
    res.status(200).json(books)
  } else if (req.method === "POST") {
    // Create a new book
  } else if (req.method === "PUT") {
    // Update a book
  } else if (req.method === "DELETE") {
    // Delete a book
  }
}
