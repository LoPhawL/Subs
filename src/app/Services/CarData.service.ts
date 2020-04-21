import { Car } from '../Models/Car';

export class CarData{

    private cars:Car[] = [
        new Car('Zen',2000,'Maruti'),
        new Car('Figo',2008,'Ford'),
        new Car('Lancer',2003,'Mitsubishi'),
        new Car('i20',2019,'Hyundai'),
        new Car('Alto 800',2017,'Maruti')
    ]

    GetCar(id:number)
    {
        if(id < this.cars.length)
            return this.cars[id];
        return null;
    }

    GetCars()
    {
        return [...this.cars];
    }
}