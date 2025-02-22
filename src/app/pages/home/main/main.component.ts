import { Location } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'selector-name',
    templateUrl: 'main.component.html',
    imports:[ButtonModule]
})

export class MainPageComponent implements OnInit {
    location = inject(Location)
    constructor() { }

    ngOnInit() { }


    forward(){
        this.location.forward()

    }
}