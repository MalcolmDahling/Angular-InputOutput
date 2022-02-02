import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Animal } from '../../app.component';

@Component({
    selector: 'app-print-animal',
    templateUrl: './print-animal.component.html',
    styleUrls: ['./print-animal.component.scss']
})
export class PrintAnimalComponent implements OnInit {

    constructor() {}
    ngOnInit(): void {}




    @Input() animal:Animal = new Animal('', '', 0, false);

    @Output() fed = new EventEmitter<Animal>();


    feedAnimal(){
        this.fed.emit(this.animal);
    }

}