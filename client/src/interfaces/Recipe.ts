export interface Recipe {
  _id: string
  name: string
  pictures: { type: string, url: string }[]
  ingredients: { _id: string, quantity: Number, name:string }[]
  steps: { _id: string, name:string, content: string }[]
  serving: string
}