export interface Recipe {
  id: string
  name: string
  pictures: { type: String, url: String }[]
  ingredients: { _id: string, quantity: Number, name:String }[]
  steps: { _id: string, name:String, content: String }[]
  serving: string
}