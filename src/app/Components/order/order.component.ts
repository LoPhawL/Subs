import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarData } from 'src/app/Services/CarData.service';
import { Car } from 'src/app/Models/Car';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderedCar:Car;
  info:string="";
  constructor(private activeRoute: ActivatedRoute, private carDataService:CarData ) { }

  ngOnInit(): void {
    let carId = this.activeRoute.snapshot.params['id'];
    this.orderedCar = this.carDataService.GetCar(carId);

    if(this.orderedCar)
    {
      this.info = "Order placed for ";
    }
    else{
      this.info = "That car doesn't exist..."
    }
  }

}
