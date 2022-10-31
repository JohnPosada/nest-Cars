import { CreateCarDto } from './dtos/create-car.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { updateCarDto } from './dtos/update-car.dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      make: 'Ford',
      model: 'Mustang',
    },
    {
      id: uuid(),
      make: 'Chevy',
      model: 'Camaro',
    },
    {
      id: uuid(),
      make: 'Dodge',
      model: 'Charger',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOne(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException('Car not found with id: ' + id);
    return car;
  }
  create(car: CreateCarDto) {
    const newCar: Car = { id: uuid(), ...car };
    this.cars.push(newCar);
    return newCar;
  }
  update(updateCar: updateCarDto, id: string) {
    const carFind = this.findOne(id);
    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        const updatedCar = { ...carFind, ...updateCar };
        console.log(updatedCar);

        return updatedCar;
      }
      return car;
    });
    return this.cars;
  }
  delete(id: string) {
    this.cars = this.cars.filter((car) => car.id !== id);
    return this.cars;
  }
}
