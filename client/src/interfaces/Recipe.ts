export interface Recipe {
  _id: string;
  name: string;
  description: string;
  pictures: { type: string; url: string }[];
  ingredients: { _id: string; quantity: number; name: string }[];
  steps: { _id: string; name: string; content: string }[];
  serving: string;
}
