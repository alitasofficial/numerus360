import { getAllBooks } from "@/server/helpers/books"

export default async function handler(req, res) {
  const data = await getAllBooks()

  res.json(data)
}
