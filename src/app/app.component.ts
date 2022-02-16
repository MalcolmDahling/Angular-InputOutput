import { Component } from '@angular/core';
import { AnimalService } from './services/animal.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Angular-InputOutput';

    // animalArray:Animal[] = [
    //     {name:'chicken', type:'friedMeat', age:15, isFed:false},
    //     {name:'pig', type:'baconMeat', age:20, isFed:false},
    //     {name:'horse', type:'gorbysMeat', age:2, isFed:false}
    // ];

    animalsFed:number = 0;

    feedAnimal(animal:Animal){
        console.log(animal)
        animal.isFed = true;
        this.animalsFed++;
    }


    constructor(public animalService:AnimalService){}

    ngOnInit(){
        this.animalService.getAnimals();
    }

}



export class Animal{
    name:string;
    type:string;
    age:number;
    isFed:boolean;

    constructor(name:string, type:string, age:number, isFed:boolean){
        this.name = name;
        this.type = type;
        this.age = age;
        this.isFed = isFed;
    }
}

