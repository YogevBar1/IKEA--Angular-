import { CategoryModel, ICategoryModel } from "../3-models/category-model";
import { FurnitureModel, IFurnitureModel } from "../3-models/furniture-model";

async function getAllFurniture(): Promise<IFurnitureModel[]> {
    return FurnitureModel.find().populate('category').exec();
}

async function addFurniture(furniture: IFurnitureModel): Promise<IFurnitureModel> {
    try {
        await furniture.validate(); // Validate the document once.
        const addedFurniture = await furniture.save();
        return addedFurniture;
    } catch (error) {
        throw error;
    }
}

async function getAllCategories(): Promise<ICategoryModel[]> {
    return CategoryModel.find().exec();
}


export default {
    getAllFurniture,
    addFurniture,
    getAllCategories
};

