import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-InputOutput';

  animalArray:Animal[] = [
    {name:'chicken', type:'friedMeat', age:15},
    {name:'pig', type:'sausageMeat', age:20}
];
}



export class Animal{
    name:string;
    type:string;
    age:number;

    constructor(name:string, type:string, age:number){
        this.name = name;
        this.type = type;
        this.age = age;
    }
}

