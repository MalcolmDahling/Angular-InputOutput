import { Injectable } from '@angular/core';
import { Animal } from '../app.component';

@Injectable({
    providedIn: 'root'
})
export class AnimalService {

    constructor() { }

    animalArray:Animal[] = [
        {name:'chicken', type:'friedMeat', age:15, isFed:false},
        {name:'pig', type:'baconMeat', age:20, isFed:false},
        {name:'horse', type:'gorbysMeat', age:2, isFed:false}
    ];


    getAnimals():Animal[]{
        return this.animalArray;
    }
}
