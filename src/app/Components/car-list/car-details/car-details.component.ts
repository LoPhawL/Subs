import { Component, OnInit } from '@angular/core';
import { CarData } from 'src/app/Services/CarData.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/Models/Car';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  selectedId:number = -99;
  selectedCar:Car;
  paramsSubscription:any;
  constructor(private activeRoute: ActivatedRoute, private carDataService:CarData ) 
  {
    this.selectedId = this.activeRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    if(this.selectedId > -1)
    {
      this.selectedCar = this.carDataService.GetCar(this.selectedId);
    }
    this.paramsSubscription = this.activeRoute.params;
    // this.paramsSubscription.subscribe(params =>
    //   {
    //     this.selectedId = params['id'];
    //     this.selectedCar = this.carDataService.GetCar(this.selectedId);
    //   });
  }

  EnableSubs()
  {
   
    this.paramsSubscription.subscribe(params =>
      {
        this.selectedId = params['id'];
        this.selectedCar = this.carDataService.GetCar(this.selectedId);
      });
  }

  

}
