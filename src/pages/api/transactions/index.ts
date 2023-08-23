import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    // Get all transactions
  } else if (req.method === "POST") {
    // Create a new transaction
  } else if (req.method === "PUT") {
    // Update a transaction
  } else if (req.method === "DELETE") {
    // Delete a transaction
  }
}
