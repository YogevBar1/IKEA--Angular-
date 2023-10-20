import mongoose, { Document, Schema, model } from "mongoose";
import { CategoryModel } from "./category-model";

//1.Interface
export interface IFurnitureModel extends Document{
    categoryId: mongoose.Schema.Types.ObjectId;
    size: string;
    color: string;
    price: number;

}

// 2.Schema:
export const FurnitureSchema = new Schema<IFurnitureModel>({
    categoryId: {
        type: mongoose.Schema.Types.ObjectId
    },
    size:{
        type: String,
        required: [true, "Missing furniture size."]
    },
    color:{
        type: String,
        required: [true, "Missing furniture color."]
    },
    price:{
        type: Number,
        required: [true, "Missing furniture price."]
    },
    
},{
    versionKey:false,
    toJSON: { virtuals: true } as Record<string, any>, // Specify the correct type
    id:false
});

FurnitureSchema.virtual("category", {
    ref: CategoryModel,
    localField: "categoryId",
    foreignField: "_id",
    justOne: true
});



// 3.Model
export const FurnitureModel = model<IFurnitureModel>("FurnitureModel", FurnitureSchema,"furniture");