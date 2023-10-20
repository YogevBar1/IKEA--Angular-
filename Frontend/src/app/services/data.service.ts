import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FurnitureModel } from '../models/furniture.model';
import { environment } from 'src/environments/environment.development';
import { firstValueFrom } from 'rxjs'
import { CategoryModel } from '../models/category.model';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    public constructor(private http: HttpClient) { }

    public async getAllFurniture(): Promise<FurnitureModel[]> {
        const observable = this.http.get<FurnitureModel[]>(environment.furnitureUrl);
        const furniture = await firstValueFrom(observable);
        return furniture;
    }

    public async addFurniture(furniture: FurnitureModel): Promise<void> {
        const observable = this.http.post<FurnitureModel>(environment.furnitureUrl, furniture);
        const addedFurniture = await firstValueFrom(observable);
    }

    public async getAllCategories(): Promise<CategoryModel[]> {
        const observable = this.http.get<CategoryModel[]>(environment.categoriesUrl); // Adjust the URL as needed
        const categories = await firstValueFrom(observable);
        return categories;
    }

}
