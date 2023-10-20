import express, { Request, Response, NextFunction } from "express";
import dataService from "../5-services/data-service";
import { FurnitureModel } from "../3-models/furniture-model";
import StatusCode from "../3-models/status-code";

const router = express.Router();

// GET http://localhost:4000/api/furniture
router.get("/furniture", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const furniture = await dataService.getAllFurniture();
        response.json(furniture);

    }
    catch(err: any) {
        next(err);
    }
});

// POST http://localhost:4000/api/furniture
router.post("/furniture", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const furniture = new FurnitureModel(request.body);
        const addedFurniture = await dataService.addFurniture(furniture);
        response.status(StatusCode.Created).json(addedFurniture);

    }
    catch(err: any) {
        next(err);
    }
});

// GET http://localhost:4000/api/categories
router.get("/categories", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const categories = await dataService.getAllCategories();
        response.json(categories);

    }
    catch(err: any) {
        next(err);
    }
});



export default router;
