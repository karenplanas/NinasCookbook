import { User } from "./User";

export interface ReviewInterface {
  rating: number
  comment: string
  userId: string
  recipeId: string
  reviewer: User
  createdAt?: string;
  updatedAt?: string;
}