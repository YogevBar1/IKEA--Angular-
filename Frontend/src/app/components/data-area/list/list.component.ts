import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FurnitureModel } from 'src/app/models/furniture.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent implements OnInit{

    public furniture: FurnitureModel[];

    public constructor(private dataService: DataService) {}

    public async ngOnInit(){
        try{
            this.furniture = await this.dataService.getAllFurniture();
        }
        catch(err: any){
            alert(err.message);
        }

    }
}
