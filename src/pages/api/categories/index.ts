import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    // Get all categories
  } else if (req.method === "POST") {
    // Create a new category
  } else if (req.method === "PUT") {
    // Update a category
  } else if (req.method === "DELETE") {
    // Delete a category
  }
}
