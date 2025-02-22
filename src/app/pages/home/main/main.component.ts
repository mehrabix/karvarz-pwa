import { Location } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, ReactiveFormsModule,Validators } from '@angular/forms'; 
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
@Component({
    selector: 'selector-name',
    templateUrl: 'main.component.html',
    styleUrl:`main.component.scss`,
    imports:[ButtonModule,ReactiveFormsModule,
        InputTextModule, 
        ButtonModule, 
        CardModule 
    ]
})

export class MainPageComponent implements OnInit {

    location = inject(Location)
    userForm: any

     constructor(private fb: FormBuilder) {
        this.userForm = this.fb.group({
            firstName: ['', Validators.required], 
            lastName: [''],
    
         })      
     }
 
    ngOnInit() { }


    forward(){
        this.location.forward()

    }


    getFormData(){
        debugger
        console.log(this.userForm.value);

    }
}