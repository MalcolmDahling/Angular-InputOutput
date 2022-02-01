import { Component, Input, OnInit } from '@angular/core';
import { Animal } from '../../app.component';

@Component({
    selector: 'app-print-animal',
    templateUrl: './print-animal.component.html',
    styleUrls: ['./print-animal.component.scss']
})
export class PrintAnimalComponent implements OnInit {

    constructor() { 
        
    }

    ngOnInit(): void {
    }


    @Input() animal:Animal = new Animal('cow', 'burgermeat', 12);

}
