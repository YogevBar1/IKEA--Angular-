import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FurnitureModel } from 'src/app/models/furniture.model';
import { CategoryModel } from 'src/app/models/category.model';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-insert',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './insert.component.html',
    styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

    public categories: CategoryModel[];
    public furniture = new FurnitureModel();
    public selectedCategoryId: string; // Variable to store the selected categoryId

    public constructor(private dataService: DataService, private router: Router) { }



    public async ngOnInit() {
        try {

            this.categories = await this.dataService.getAllCategories();
        }
        catch (err: any) {
            alert(err.message);
        }

    }

    public async send(){
        try{
            console.log(this.furniture);
            console.log("id= " +this.furniture.categoryId);
            this.furniture.categoryId = this.selectedCategoryId;
            await this.dataService.addFurniture(this.furniture);
            this.router.navigateByUrl("/list");
            
        }
        catch(err:any){
            alert(err.message);
        }
    }
}
