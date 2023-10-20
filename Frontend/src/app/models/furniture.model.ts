import { CategoryModel } from "./category.model"

export class FurnitureModel {
    _id: string
    categoryId: string
    size: string
    color: string
    price: number
    public category: CategoryModel;
  }
  