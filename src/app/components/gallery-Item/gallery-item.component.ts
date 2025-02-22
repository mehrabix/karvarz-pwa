import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'gallery-item',
    templateUrl: 'gallery-item.component.html',
    imports:[DialogModule,AvatarModule,ButtonModule,FormsModule]
})

export class GalleryItem implements OnInit {
    @Input() img!:string
    @Input() title!:string | undefined
    @Input() id!:number | undefined
    @Output() onDelete = new EventEmitter()

    isOpen:boolean = false


    inputTitle:string|undefined
    constructor() { }

    ngOnInit() { 
        this.inputTitle = this.title
    }


    handleDelete(){
    this.onDelete.emit(this.id)    
    }

    showDialog(){
        this.isOpen = true;
    }

    closeDialog(){
        this.isOpen = false;
    }

    saveData(){
        this.title = this.inputTitle;
        this.isOpen = false;
    }
}