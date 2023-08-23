import { prisma } from "../db"

export const getAllCategories = async () => {
  return await prisma.category.findMany()
}
