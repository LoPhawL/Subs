import { Component, OnInit } from '@angular/core';
import { CarData } from 'src/app/Services/CarData.service';
import { Car } from 'src/app/Models/Car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  initialCarData:Car[];
  constructor(private carDataService:CarData) { }

  ngOnInit(): void {
    this.initialCarData = this.carDataService.GetCars();
  }

}
