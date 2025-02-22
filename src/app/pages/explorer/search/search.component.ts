import { JsonPipe, Location } from '@angular/common';
import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { SearchService } from './search.service';
import { CardItem } from './search.model';
import { GalleryItem } from '../../../components/gallery-Item/gallery-item.component';

import { Button, ButtonModule } from 'primeng/button';
import { ButtonDirective } from '../../../directives/button-directive';

@Component({
    selector: 'selector-name',
    templateUrl: 'search.component.html',
    providers:[SearchService],
    imports:[JsonPipe,GalleryItem,ButtonModule,Button,ButtonDirective]
})

export class SearchPageComponent implements OnInit,AfterViewInit {
    searchService = inject(SearchService)
    location = inject(Location)
    galleryItems!:CardItem[]
    @ViewChild('submit') submit!:Button

    ngOnInit() {
        this.searchService.getGalleryItems().subscribe({
            next:((_res) =>{
                this.galleryItems = _res as CardItem[]
            })
        })
     }

     ngAfterViewInit(): void {
         debugger
     }




    back(){
        this.location.back()
    }


    handleDelete(id: number){
        const filteredItem = this.galleryItems.filter(el => el.id !== id)
        console.log(filteredItem);
        this.galleryItems = filteredItem;
        
    }
}