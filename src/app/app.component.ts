import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Angular-InputOutput';

    animalArray:Animal[] = [
        {name:'chicken', type:'friedMeat', age:15, isFed:false},
        {name:'pig', type:'sausageMeat', age:20, isFed:false},
        {name:'horse', type:'gorbysMeat', age:2, isFed:false}
    ];

    feedAnimal2(){
        
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

